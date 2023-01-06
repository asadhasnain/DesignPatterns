import { Point } from "./Point";
import { PointIconFactory } from "./PointIconFactory";
import { PointType } from "./PointType";

export class PointService {
    private pointIconFactory: PointIconFactory;

    constructor(pointIconFactory: PointIconFactory) {
        this.pointIconFactory = pointIconFactory;
    }

    public getPoints(): Array<Point> {
        const points: Array<Point> = new Array<Point>();
        const point = new Point(1, 2, this.pointIconFactory.getPointIcon(PointType.CAFE));
        points.push(point);
        return points;
    }
}