import MPPoint from "./MPPoint";
export default class MPCameraPosition {
    readonly zoom: number;
    readonly target: MPPoint;
    readonly tilt: number;
    readonly bearing: number;
    constructor(zoom: number, target: MPPoint, tilt: number, bearing: number);
    static create(object: MPCameraPositionParams): MPCameraPosition;
}
export interface MPCameraPositionParams {
    zoom: number;
    target: MPPoint | any;
    tilt?: number;
    bearing?: number;
}
