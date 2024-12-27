export default class MPSettings3D {
    private _extrusionOpacity?;
    private _wallOpacity?;
    private constructor();
    static create(object: MPSettings3DParams): MPSettings3D;
    set extrusionOpacity(opacity: number);
    get extrusionOpacity(): number;
    set wallOpacity(opacity: number);
    get wallOpacity(): number;
}
export interface MPSettings3DParams {
    extrusionOpacity?: number;
    wallOpacity?: number;
}
