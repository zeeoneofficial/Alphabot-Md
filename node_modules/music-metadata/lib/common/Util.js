"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRatio = exports.dbToRatio = exports.ratioToDb = exports.a2hex = exports.isBitSet = exports.getBitAllignedNumber = exports.stripNulls = exports.decodeString = exports.trimRightNull = exports.findZero = exports.getBit = void 0;
function getBit(buf, off, bit) {
    return (buf[off] & (1 << bit)) !== 0;
}
exports.getBit = getBit;
/**
 * Found delimiting zero in uint8Array
 * @param uint8Array Uint8Array to find the zero delimiter in
 * @param start Offset in uint8Array
 * @param end Last position to parse in uint8Array
 * @param encoding The string encoding used
 * @return Absolute position on uint8Array where zero found
 */
function findZero(uint8Array, start, end, encoding) {
    let i = start;
    if (encoding === 'utf16le') {
        while (uint8Array[i] !== 0 || uint8Array[i + 1] !== 0) {
            if (i >= end)
                return end;
            i += 2;
        }
        return i;
    }
    else {
        while (uint8Array[i] !== 0) {
            if (i >= end)
                return end;
            i++;
        }
        return i;
    }
}
exports.findZero = findZero;
function trimRightNull(x) {
    const pos0 = x.indexOf('\0');
    return pos0 === -1 ? x : x.substr(0, pos0);
}
exports.trimRightNull = trimRightNull;
function swapBytes(uint8Array) {
    const l = uint8Array.length;
    if ((l & 1) !== 0)
        throw new Error('Buffer length must be even');
    for (let i = 0; i < l; i += 2) {
        const a = uint8Array[i];
        uint8Array[i] = uint8Array[i + 1];
        uint8Array[i + 1] = a;
    }
    return uint8Array;
}
/**
 *
 * @param buffer Decoder input data
 * @param encoding 'utf16le' | 'utf16' | 'utf8' | 'iso-8859-1'
 * @return {string}
 */
function decodeString(buffer, encoding) {
    // annoying workaround for a double BOM issue
    // https://github.com/leetreveil/musicmetadata/issues/84
    let offset = 0;
    if (buffer[0] === 0xFF && buffer[1] === 0xFE) { // little endian
        if (encoding === 'utf16le') {
            offset = 2;
        }
        else if (buffer[2] === 0xFE && buffer[3] === 0xFF) {
            offset = 2; // Clear double BOM
        }
    }
    else if (encoding === 'utf16le' && buffer[0] === 0xFE && buffer[1] === 0xFF) {
        // BOM, indicating big endian decoding
        return decodeString(swapBytes(buffer), encoding);
    }
    return buffer.toString(encoding, offset);
}
exports.decodeString = decodeString;
function stripNulls(str) {
    str = str.replace(/^\x00+/g, '');
    str = str.replace(/\x00+$/g, '');
    return str;
}
exports.stripNulls = stripNulls;
/**
 * Read bit-aligned number start from buffer
 * Total offset in bits = byteOffset * 8 + bitOffset
 * @param buf Byte buffer
 * @param byteOffset Starting offset in bytes
 * @param bitOffset Starting offset in bits: 0 = lsb
 * @param len Length of number in bits
 * @return {number} decoded bit aligned number
 */
function getBitAllignedNumber(buf, byteOffset, bitOffset, len) {
    const byteOff = byteOffset + ~~(bitOffset / 8);
    const bitOff = bitOffset % 8;
    let value = buf[byteOff];
    value &= 0xff >> bitOff;
    const bitsRead = 8 - bitOff;
    const bitsLeft = len - bitsRead;
    if (bitsLeft < 0) {
        value >>= (8 - bitOff - len);
    }
    else if (bitsLeft > 0) {
        value <<= bitsLeft;
        value |= getBitAllignedNumber(buf, byteOffset, bitOffset + bitsRead, bitsLeft);
    }
    return value;
}
exports.getBitAllignedNumber = getBitAllignedNumber;
/**
 * Read bit-aligned number start from buffer
 * Total offset in bits = byteOffset * 8 + bitOffset
 * @param buf Byte buffer
 * @param byteOffset Starting offset in bytes
 * @param bitOffset Starting offset in bits: 0 = most significant bit, 7 is least significant bit
 * @return {number} decoded bit aligned number
 */
function isBitSet(buf, byteOffset, bitOffset) {
    return getBitAllignedNumber(buf, byteOffset, bitOffset, 1) === 1;
}
exports.isBitSet = isBitSet;
function a2hex(str) {
    const arr = [];
    for (let i = 0, l = str.length; i < l; i++) {
        const hex = Number(str.charCodeAt(i)).toString(16);
        arr.push(hex.length === 1 ? '0' + hex : hex);
    }
    return arr.join(' ');
}
exports.a2hex = a2hex;
/**
 * Convert power ratio to DB
 * ratio: [0..1]
 */
function ratioToDb(ratio) {
    return 10 * Math.log10(ratio);
}
exports.ratioToDb = ratioToDb;
/**
 * Convert dB to ratio
 * db Decibels
 */
function dbToRatio(dB) {
    return Math.pow(10, dB / 10);
}
exports.dbToRatio = dbToRatio;
/**
 * Convert replay gain to ratio and Decibel
 * @param value string holding a ratio like '0.034' or '-7.54 dB'
 */
function toRatio(value) {
    const ps = value.split(' ').map(p => p.trim().toLowerCase());
    // @ts-ignore
    if (ps.length >= 1) {
        const v = parseFloat(ps[0]);
        if (ps.length === 2 && ps[1] === 'db') {
            return {
                dB: v,
                ratio: dbToRatio(v)
            };
        }
        else {
            return {
                dB: ratioToDb(v),
                ratio: v
            };
        }
    }
}
exports.toRatio = toRatio;
