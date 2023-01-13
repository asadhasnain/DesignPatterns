import { State } from "./State";
import { StoppedState } from "./StoppedState";
import { StopWatch } from "./StopWatch";

export class RunningState implements State {
    private stopWatch: StopWatch;

    constructor(stopWatch: StopWatch) {
        this.stopWatch = stopWatch;
    } 

    public click(): void {
        console.log("Stopping...")
        this.stopWatch.state = new StoppedState(this.stopWatch);
    }

}