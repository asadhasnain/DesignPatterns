import { Filter } from "./Filter";

export class BlackAndWhiteFilter implements Filter {
    public apply(fileName: string): void {
        console.log("Applying B&W filter")
    }

}