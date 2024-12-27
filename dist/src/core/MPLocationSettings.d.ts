export default class MPLocationSettings {
    readonly id: string;
    private _selectable?;
    private constructor();
    static create(id: string, object: MPLocationSettingsParams): MPLocationSettings;
    set selectable(selectable: boolean | undefined);
    get selectable(): boolean | undefined;
}
export interface MPLocationSettingsParams {
    selectable?: boolean;
}
