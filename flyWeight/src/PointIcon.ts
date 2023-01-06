import { PointType } from "./PointType";

export class PointIcon {
    private readonly type: PointType;
    private readonly icon: Int8Array;

    constructor(type: PointType, icon: Int8Array) {
        this.type = type;
        this.icon = icon;
    }

    public get Type(): PointType {
        return this.type;
    }

    public get Icon(): Int8Array {
        return this.icon;
    }

}