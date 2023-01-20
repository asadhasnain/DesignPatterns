import { IIterator } from "./IIterator";

export class ArrayIterator<T> implements IIterator<T> {
    private _array: Array<T>;
    private _position: number;
    
    constructor(array: Array<T>) {
        this._array = array;
        this._position = 0;
    }
    public hasNext(): boolean {
        return this._position < this._array.length;
    }
    
    public current(): T {
        return this._array[this._position];
    }

    public next(): void {
        this._position < this._array.length && this._position++;
    }

}