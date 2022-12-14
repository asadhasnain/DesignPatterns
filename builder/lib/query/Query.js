"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
class Query {
    constructor(table) {
        this._table = table;
    }
    set filter(filter) {
        this._filters = ` WHERE ${filter}`;
    }
    set orderBy(orderBy) {
        this._orderBy = ` ORDERBY ${orderBy}`;
    }
    toString() {
        return `SELECT * from ${this._table}${this._filters ? this._filters : ""}${this._orderBy ? this._orderBy : ""}`;
    }
}
exports.Query = Query;
