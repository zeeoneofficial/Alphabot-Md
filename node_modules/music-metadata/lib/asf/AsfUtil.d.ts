/// <reference types="node" />
import { DataType } from "./AsfObject";
export declare type AttributeParser = (buf: Buffer) => boolean | string | number | bigint | Buffer;
export declare class AsfUtil {
    static getParserForAttr(i: DataType): AttributeParser;
    static parseUnicodeAttr(buf: any): string;
    private static attributeParsers;
    private static parseByteArrayAttr;
    private static parseBoolAttr;
    private static parseDWordAttr;
    private static parseQWordAttr;
    private static parseWordAttr;
}
