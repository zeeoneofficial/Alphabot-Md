"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomBufferReader = void 0;
/**
 * Provides abstract Node Buffer access via the IRandomRead interface
 */
class RandomBufferReader {
    constructor(buf) {
        this.buf = buf;
        this.fileSize = buf.length;
    }
    /**
     * Read from a given position of an abstracted file or buffer.
     * @param buffer {Buffer} is the buffer that the data will be written to.
     * @param offset {number} is the offset in the buffer to start writing at.
     * @param length {number}is an integer specifying the number of bytes to read.
     * @param position {number} is an argument specifying where to begin reading from in the file.
     * @return {Promise<number>} bytes read
     */
    async randomRead(buffer, offset, length, position) {
        return this.buf.copy(buffer, offset, position, position + length);
    }
}
exports.RandomBufferReader = RandomBufferReader;
