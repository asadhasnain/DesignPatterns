import { PointIcon } from "./PointIcon";
import { PointType } from "./PointType";

export class PointIconFactory {
    private icons: Map<PointType, PointIcon>;

    constructor() {
        this.icons = new Map<PointType, PointIcon>();
    }
    
    public getPointIcon(type: PointType): PointIcon {
        
        if(!this.icons.has(type)) {
            const icon =  new PointIcon(type, new Int8Array(10));
            this.icons.set(type, icon);
        }

        return this.icons.get(type);
    }
}