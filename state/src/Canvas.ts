import { Tool } from "./Tool";

export class Canvas {
    private _tool: Tool;

    public get tool(): Tool {
        return this._tool;
    }
    public set tool(value: Tool) {
        this._tool = value;
    }

    public mouseUp(): void {
        this._tool.mouseUp();
    }

    public mouseDown(): void {
        this._tool.mouseDown();
    }
}