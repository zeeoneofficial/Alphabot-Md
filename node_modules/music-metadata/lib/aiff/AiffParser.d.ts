import { BasicParser } from '../common/BasicParser';
import * as iff from '../iff';
/**
 * AIFF - Audio Interchange File Format
 *
 * Ref:
 *  http://www.onicos.com/staff/iz/formats/aiff.html
 *  http://muratnkonar.com/aiff/index.html
 *  http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/AIFF/AIFF.html
 */
export declare class AIFFParser extends BasicParser {
    private isCompressed;
    parse(): Promise<void>;
    readData(header: iff.IChunkHeader): Promise<number>;
}
