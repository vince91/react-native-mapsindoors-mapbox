export default class MPRouteProperty {
    readonly value?: number;
    readonly text?: string;
    readonly timeZone?: string;
    private constructor();
    static create(object: MPRoutePropertyParams): MPRouteProperty;
    toJSON(): MPRoutePropertyParams;
}
export interface MPRoutePropertyParams {
    value?: number;
    text?: string;
    time_zone?: string;
}
