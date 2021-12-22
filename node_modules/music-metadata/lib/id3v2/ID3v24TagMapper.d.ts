import { IRating, ITag } from '../type';
import { INativeMetadataCollector } from '../common/MetadataCollector';
import { CaseInsensitiveTagMap } from '../common/CaseInsensitiveTagMap';
export declare class ID3v24TagMapper extends CaseInsensitiveTagMap {
    static toRating(popm: any): IRating;
    constructor();
    /**
     * Handle post mapping exceptions / correction
     * @param {string} tag to post map
     * @param warnings USed to register warnings
     * @return Common value e.g. "Buena Vista Social Club"
     */
    protected postMap(tag: ITag, warnings: INativeMetadataCollector): void;
}
