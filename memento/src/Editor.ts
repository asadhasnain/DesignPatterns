import { EditorState } from "./EditorState";

export class Editor {
    private _content: string;

    public getContent(): string {
        return this._content;
    }

    public setContent(content: string): void {
        this._content = content;
    }

    public createState(): EditorState {
        return new EditorState(this._content);
    }

    public restore (state: EditorState) {
        this._content = state.getContent();
    }
}