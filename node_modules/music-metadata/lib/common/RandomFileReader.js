"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomFileReader = void 0;
const fs = require("fs");
/**
 * Provides abstract file access via the IRandomRead interface
 */
class RandomFileReader {
    constructor(filePath, fileSize) {
        this.fileSize = fileSize;
        this.fd = fs.openSync(filePath, 'r');
    }
    /**
     * Read from a given position of an abstracted file or buffer.
     * @param buffer {Buffer} is the buffer that the data will be written to.
     * @param offset {number} is the offset in the buffer to start writing at.
     * @param length {number}is an integer specifying the number of bytes to read.
     * @param position {number} is an argument specifying where to begin reading from in the file.
     * @return {Promise<number>} bytes read
     */
    randomRead(buffer, offset, length, position) {
        return new Promise((resolve, reject) => {
            fs.read(this.fd, buffer, offset, length, position, (err, bytesRead) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(bytesRead);
                }
            });
        });
    }
    close() {
        fs.closeSync(this.fd);
    }
}
exports.RandomFileReader = RandomFileReader;
