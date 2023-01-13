import { RunningState } from "./RunningState";
import { State } from "./State";
import { StopWatch } from "./StopWatch";

export class StoppedState implements State {
    private stopWatch: StopWatch ;

    constructor(stopWatch: StopWatch) {
        this.stopWatch = stopWatch;
    } 

    public click(): void {
        console.log("Running")
        this.stopWatch.state = new RunningState(this.stopWatch);
    }

}