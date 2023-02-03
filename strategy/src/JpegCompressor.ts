import { Compressor } from "./Compressor";

export class JpegCompressor implements Compressor {
    public compress(fileName: string): void {
        console.log("compression using Jpeg")
    }

}