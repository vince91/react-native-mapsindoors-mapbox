import MPBounds from "./MPBounds";
import MPCameraPosition from "./MPCameraPosition";
import MPPoint from "./MPPoint";
import MPSize from "./MPSize";
export default class MPCameraUpdate {
    readonly mode: Mode;
    readonly point?: MPPoint;
    readonly bounds?: MPBounds;
    readonly padding?: number;
    readonly width?: number;
    readonly height?: number;
    readonly zoom?: number;
    readonly position?: MPCameraPosition;
    private constructor();
    static fromPoint(point: MPPoint): MPCameraUpdate;
    static fromBounds(bounds: MPBounds, padding: number, size?: MPSize): MPCameraUpdate;
    static zoomBy(amount: number): MPCameraUpdate;
    static zoomTo(level: number): MPCameraUpdate;
    static fromCameraPosition(position: MPCameraPosition): MPCameraUpdate;
}
declare enum Mode {
    fromPoint = "fromPoint",
    fromBounds = "fromBounds",
    zoomBy = "zoomBy",
    zoomTo = "zoomTo",
    fromCameraPosition = "fromCameraPosition"
}
export {};
