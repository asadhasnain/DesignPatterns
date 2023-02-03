import { BlackAndWhiteFilter } from "./BlackAndWhiteFilter";
import { ImageStorage } from "./ImageStorage";
import { JpegCompressor } from "./JpegCompressor";

(() => { 
    console.log("\n***** Strategy Behavioral Design Pattern: Encapsulate an algorithm inside the class *****\n");
    // const imageStorage: ImageStorage = new ImageStorage(new JpegCompressor(), new BlackAndWhiteFilter());
    // imageStorage.store("abc");

    const imageStorage: ImageStorage = new ImageStorage();
    imageStorage.store("abc", new JpegCompressor(), new BlackAndWhiteFilter());
})();