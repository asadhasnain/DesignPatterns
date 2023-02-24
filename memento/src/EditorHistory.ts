import { EditorState } from "./EditorState";

export class EditorHistory {
    private _states: Array<EditorState>;

    constructor() {
        this._states = new Array<EditorState>();
    }

    public push(state: EditorState) {
        this._states.push(state);
    }

    public pop(): EditorState {
        return this._states.pop() ?? new EditorState("");
    }
}