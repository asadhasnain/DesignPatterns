import { Compressor } from "./Compressor";
import { Filter } from "./Filter";

export class ImageStorage {
    // private _compressor: Compressor;
    // private _filter: Filter;
    
    // constructor(compressor: Compressor, filter: Filter) {
    //     this._compressor = compressor;
    //     this._filter = filter;
    // }

    // public store(fileName: string): void {
    //     this._compressor.compress(fileName);
    //     this._filter.apply(fileName);
    // }

    public store(fileName: string, compressor: Compressor, filter: Filter): void {
        compressor.compress(fileName);
        filter.apply(fileName);
    }
}