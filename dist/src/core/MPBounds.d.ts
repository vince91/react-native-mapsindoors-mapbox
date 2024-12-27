import MPPoint from "./MPPoint";
export default class MPBounds {
    readonly northeast: MPPoint;
    readonly southwest: MPPoint;
    constructor(northeast: MPPoint, southwest: MPPoint);
    static create(object: MPBoundsParams): MPBounds;
    static fromBBox(bbox: number[]): MPBounds;
    get center(): MPPoint;
    contains(point: MPPoint): boolean;
    toJSON(): {
        northeast: number[];
        southwest: number[];
    } | {
        northeast: MPPoint;
        southwest: MPPoint;
    };
    static Builder: {
        new (): {
            north: number;
            south: number;
            east: number;
            west: number;
            include(point: MPPoint): void;
            build(): MPBounds;
        };
    };
}
export interface MPBoundsParams {
    southwest: MPPoint;
    northeast: MPPoint;
}
