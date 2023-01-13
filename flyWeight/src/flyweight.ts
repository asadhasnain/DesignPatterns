import { PointIconFactory } from "./PointIconFactory";
import { PointService } from "./PointService";

(()=> {
    console.log("\n***** FlyWeight Design Pattern: A fine-grained instance used for efficient sharing *****\n \
                   ***** (Reduces amount of memory object uses) *****\n");

    const service: PointService = new PointService(new PointIconFactory());
    service.getPoints().forEach(point => {
        point.draw();
    });
})();