"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeexParser = void 0;
const initDebug = require("debug");
const Speex = require("./Speex");
const VorbisParser_1 = require("../vorbis/VorbisParser");
const debug = initDebug('music-metadata:parser:ogg:speex');
/**
 * Speex, RFC 5574
 * Ref:
 *   https://www.speex.org/docs/manual/speex-manual/
 *   https://tools.ietf.org/html/rfc5574
 */
class SpeexParser extends VorbisParser_1.VorbisParser {
    constructor(metadata, options, tokenizer) {
        super(metadata, options);
        this.tokenizer = tokenizer;
    }
    /**
     * Parse first Speex Ogg page
     * @param {IPageHeader} header
     * @param {Buffer} pageData
     */
    parseFirstPage(header, pageData) {
        debug('First Ogg/Speex page');
        const speexHeader = Speex.Header.get(pageData, 0);
        this.metadata.setFormat('codec', `Speex ${speexHeader.version}`);
        this.metadata.setFormat('numberOfChannels', speexHeader.nb_channels);
        this.metadata.setFormat('sampleRate', speexHeader.rate);
        if (speexHeader.bitrate !== -1) {
            this.metadata.setFormat('bitrate', speexHeader.bitrate);
        }
    }
}
exports.SpeexParser = SpeexParser;
