import { RouteStopIconConfig } from "./RouteStopIconConfig";
export default class MPRouteStopIconConfig implements RouteStopIconConfig {
    readonly numbered: boolean;
    readonly label: string;
    readonly color: string;
    private constructor();
    getImage(): URL;
    static create(obj: MPRouteStopIconConfigParams): MPRouteStopIconConfig;
}
export interface MPRouteStopIconConfigParams {
    numbered: boolean;
    label: string;
    color: string;
}
