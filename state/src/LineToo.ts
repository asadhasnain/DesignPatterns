import { Tool } from "./Tool";

export class LineTool implements Tool {
    
    public mouseDown(): void {
        console.log("Line Tool in action")
    }

    public mouseUp(): void {
        console.log("Line drawn")
    }

}