import { Query } from "./Query";

export class QueryBuilder {
  private _query: Query;

  constructor(table: string) {
    this._query = new Query(table);
  }

  public filter(filter: string): QueryBuilder {
    this._query.filter = filter;
    return this;
  }

  public orderBy(orderBy: string): QueryBuilder {
    this._query.orderBy = orderBy;
    return this;
  }

  public build(): Query {
    return this._query;
  }
}