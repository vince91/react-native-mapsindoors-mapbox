import MPPoint from "./MPPoint";
export default abstract class MPGeometry {
    static readonly point: string;
    static readonly polygon: string;
    static readonly multiPolygon: string;
    abstract readonly position: MPPoint;
    abstract readonly type: string;
    abstract getArea(): Promise<number>;
    contains(point: MPPoint): Promise<boolean>;
    toJson(): string;
}
