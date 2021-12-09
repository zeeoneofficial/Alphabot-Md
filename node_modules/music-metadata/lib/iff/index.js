"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const FourCC_1 = require("../common/FourCC");
const Token = require("token-types");
/**
 * Common AIFF chunk header
 */
exports.Header = {
    len: 8,
    get: (buf, off) => {
        return {
            // Chunk type ID
            chunkID: FourCC_1.FourCcToken.get(buf, off),
            // Chunk size
            chunkSize: Number(BigInt(Token.UINT32_BE.get(buf, off + 4)))
        };
    }
};
