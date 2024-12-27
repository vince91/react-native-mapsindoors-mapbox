import MPLocationSettings from "./MPLocationSettings";
export default class MPPOIType {
    readonly name: string;
    readonly translatedName: string;
    private locationSettings?;
    private constructor();
    static create(object: MPPOITypeParams): MPPOIType;
    set selectable(selectable: boolean | null);
    get selectable(): boolean | null;
}
export interface MPPOITypeParams {
    name: string;
    translatedName: string;
    locationSettings?: MPLocationSettings;
}
