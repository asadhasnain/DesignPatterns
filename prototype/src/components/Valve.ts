import { IComponent } from "./IComponent";

export class Valve implements IComponent {
    private _flow: number;
    private _error: string;

    constructor(flow: number) {
        this._flow = flow;
    }

    public get flow() {
        return this._flow;
    }
    
    public get error() {
        return this._error;
    }

    public render() {
       console.log("Rendering a valve");
       this._error = "Error";
    }

    public clone(): IComponent {
        const newValve = new Valve(this._flow);
        newValve._error = this._error;
        return newValve;
    }
}