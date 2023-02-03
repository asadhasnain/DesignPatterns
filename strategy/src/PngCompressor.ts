import { Compressor } from "./Compressor";

export class PngCompressor implements Compressor {
    public compress(fileName: string): void {
        console.log("compression using Png")
    }

}