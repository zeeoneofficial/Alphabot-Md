import { AbstractID3Parser } from '../id3v2/AbstractID3Parser';
declare class MusepackParser extends AbstractID3Parser {
    _parse(): Promise<void>;
}
export default MusepackParser;
