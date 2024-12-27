import { MPPoint, MPGeometry, MPBounds } from "../../index";
export default class MPPolygon extends MPGeometry {
    private _coordinates;
    private _bbox;
    private _bounds?;
    private _area?;
    private constructor();
    set bbox(box: number[]);
    get bbox(): number[];
    set coordinates(coordinates: number[][][]);
    get coordinates(): number[][][];
    get bounds(): MPBounds;
    getArea(): Promise<number>;
    get position(): MPPoint;
    get type(): string;
    static create(object: MPPolygonParams): MPPolygon;
    distanceToClosestEdge(point: MPPoint): Promise<number>;
    private clearCache;
    toJSON(): MPPolygonParams;
}
export interface MPPolygonParams {
    type?: string;
    coordinates: number[][][];
    bbox: number[];
}
