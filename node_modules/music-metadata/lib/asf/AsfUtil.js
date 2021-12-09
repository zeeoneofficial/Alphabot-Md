"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsfUtil = void 0;
const util = require("../common/Util");
const Token = require("token-types");
class AsfUtil {
    static getParserForAttr(i) {
        return AsfUtil.attributeParsers[i];
    }
    static parseUnicodeAttr(buf) {
        return util.stripNulls(util.decodeString(buf, 'utf16le'));
    }
    static parseByteArrayAttr(buf) {
        const newBuf = Buffer.alloc(buf.length);
        buf.copy(newBuf);
        return newBuf;
    }
    static parseBoolAttr(buf, offset = 0) {
        return AsfUtil.parseWordAttr(buf, offset) === 1;
    }
    static parseDWordAttr(buf, offset = 0) {
        return buf.readUInt32LE(offset);
    }
    static parseQWordAttr(buf, offset = 0) {
        return Token.UINT64_LE.get(buf, offset);
    }
    static parseWordAttr(buf, offset = 0) {
        return buf.readUInt16LE(offset);
    }
}
exports.AsfUtil = AsfUtil;
AsfUtil.attributeParsers = [
    AsfUtil.parseUnicodeAttr,
    AsfUtil.parseByteArrayAttr,
    AsfUtil.parseBoolAttr,
    AsfUtil.parseDWordAttr,
    AsfUtil.parseQWordAttr,
    AsfUtil.parseWordAttr,
    AsfUtil.parseByteArrayAttr
];
