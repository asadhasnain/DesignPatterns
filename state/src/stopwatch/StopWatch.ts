import { State } from "./State";
import { StoppedState } from "./StoppedState";

export class StopWatch {
    private _state: State = new StoppedState(this);

    public get state(): State {
        return this._state;
    }

    public set state(value: State) {
        this._state = value;
    }

    public click(): void {
        this._state.click();
    }
}