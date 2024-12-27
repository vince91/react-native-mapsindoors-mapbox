export default class MPMapStyle {
    readonly folder: string;
    readonly displayName: string;
    private constructor();
    static create(object: MPMapStyleParams): MPMapStyle;
}
export interface MPMapStyleParams {
    folder: string;
    displayName: string;
}
