import { Filter } from "./Filter";

export class HighContrastFilter implements Filter {
    public apply(fileName: string): void {
        console.log("Applying High Contrast filter")
    }

}