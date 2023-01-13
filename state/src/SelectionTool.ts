import { Tool } from "./Tool";

export class SelectionTool implements Tool {

    public mouseDown(): void {
        console.log("Selection tool in action");
    }

    public mouseUp(): void {
        console.log("Selected something");
    }

}