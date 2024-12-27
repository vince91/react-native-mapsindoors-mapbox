import MPGeometry from "./MPGeometry";
export default class MPPoint extends MPGeometry {
    readonly latitude: number;
    readonly longitude: number;
    readonly floorIndex?: number;
    constructor(latitude: number, longitude: number, floorIndex?: number);
    static create(pointParams: MPPointParams): MPPoint;
    angleBetween(other: MPPoint): Promise<number>;
    distanceTo(other: MPPoint): Promise<number>;
    get position(): MPPoint;
    get type(): string;
    getArea(): Promise<number>;
    toJSON(): MPPointParams;
}
export interface MPPointParams {
    type?: string;
    coordinates: number[];
}
