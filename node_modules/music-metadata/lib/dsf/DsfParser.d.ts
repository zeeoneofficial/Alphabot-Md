import { AbstractID3Parser } from '../id3v2/AbstractID3Parser';
/**
 * DSF (dsd stream file) File Parser
 * Ref: https://dsd-guide.com/sites/default/files/white-papers/DSFFileFormatSpec_E.pdf
 */
export declare class DsfParser extends AbstractID3Parser {
    _parse(): Promise<void>;
    private parseChunks;
}
