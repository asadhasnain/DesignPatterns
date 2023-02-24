export class EditorState {

    private readonly _content: string;
    constructor(content: string) {
        this._content = content;
    }

    public getContent(): string{
        return this._content;
    }
}