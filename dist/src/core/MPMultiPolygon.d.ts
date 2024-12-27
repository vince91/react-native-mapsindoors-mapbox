import { MPPoint, MPGeometry, MPBounds } from "../../index";
export default class MPMultiPolygon extends MPGeometry {
    private _coordinates;
    private _bbox;
    private _bounds?;
    private _area?;
    private constructor();
    set bbox(box: number[]);
    get bbox(): number[];
    set coordinates(coordinates: number[][][][]);
    get coordinates(): number[][][][];
    get bounds(): MPBounds;
    getArea(): Promise<number>;
    static create(object: MPMultiPolygonParams): MPMultiPolygon;
    distanceToClosestEdge(point: MPPoint): Promise<number>;
    get position(): MPPoint;
    get type(): string;
    private clearCache;
    toJSON(): MPMultiPolygonParams;
}
export interface MPMultiPolygonParams {
    type?: string;
    coordinates: number[][][][];
    bbox?: number[];
}
