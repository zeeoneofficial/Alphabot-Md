/**
 * windows-1252 / iso_8859-1 decoder (ANSI)
 */
export declare class Windows1292Decoder {
    static decode(buffer: Uint8Array): string;
    private static windows1252;
    private static inRange;
    private static codePointToString;
    private static singleByteDecoder;
}
