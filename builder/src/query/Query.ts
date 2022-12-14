export class Query {

  private _table: string;
  private _filters?: string;
  private _orderBy?: string;

  constructor(table: string) {
    this._table = table;
  }

  public set filter(filter: string) {
    this._filters = ` WHERE ${filter}`;
  }


  public set orderBy(orderBy: string) {
    this._orderBy = ` ORDERBY ${orderBy}`;
  }

  public toString() {
    return `SELECT * from ${this._table}${this._filters ? this._filters : ""}${this._orderBy ? this._orderBy : ""}`
  }

}