import { ArrayIterator } from "./ArrayIterator";
import { IIterator } from "./IIterator";

export class BrowserHistory {
    private _urls: Array<string>;

    constructor() {
        this._urls = new Array<string>();
    }

    public push(url: string) {
        this._urls.push(url);
    }

    public pop() {
        return this._urls.pop();
    }

    public createIterator(): IIterator<string> {
        return new ArrayIterator<string>(this._urls);
    }
}