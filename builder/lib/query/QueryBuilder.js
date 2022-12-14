"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
const Query_1 = require("./Query");
class QueryBuilder {
    constructor(table) {
        this._query = new Query_1.Query(table);
    }
    filter(filter) {
        this._query.filter = filter;
        return this;
    }
    orderBy(orderBy) {
        this._query.orderBy = orderBy;
        return this;
    }
    build() {
        return this._query;
    }
}
exports.QueryBuilder = QueryBuilder;
