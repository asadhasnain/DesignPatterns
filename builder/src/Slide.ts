export class Slide {
  private _text: string;

  constructor(text: string) {
    this._text = text;
  }

  public get text() {
    return this._text;
  }
};