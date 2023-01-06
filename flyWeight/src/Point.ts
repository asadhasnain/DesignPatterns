import { PointIcon } from "./PointIcon";
import { PointType } from "./PointType";


/**
 * Map showing different point of interest.
 * 
 */
export class Point {
    private x: number;  
    private y: number;
    private pointIcon: PointIcon; 

    constructor(x: number, y: number, pointIcon: PointIcon) {
        this.x = x;
        this.y = y;
        this.pointIcon = pointIcon;
    }

    public draw(): void {
        console.log(`type: ${PointType[this.pointIcon.Type]} at (x: ${this.x}, y: ${this.y}), icon: ${this.pointIcon.Icon}`);
    }
}