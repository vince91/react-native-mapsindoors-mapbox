import { MPRouteStep, MPRouteProperty, MPRouteCoordinate } from "../../index";
export default class MPRouteLeg {
    readonly steps?: MPRouteStep[];
    readonly distance?: MPRouteProperty;
    readonly duration?: MPRouteProperty;
    readonly startAddress?: string;
    readonly endAdress?: string;
    readonly startLocation?: MPRouteCoordinate;
    readonly endLocation?: MPRouteCoordinate;
    readonly legStartReason?: string;
    readonly legEndReason?: string;
    readonly stopIndex?: number;
    private constructor();
    static create(object: MPRouteLegParams): MPRouteLeg;
    toJSON(): MPRouteLegParams;
}
export interface MPRouteLegParams {
    steps?: MPRouteStep[];
    distance?: MPRouteProperty;
    duration?: MPRouteProperty;
    start_address?: string;
    end_address?: string;
    start_location?: MPRouteCoordinate;
    end_location?: MPRouteCoordinate;
    leg_start_reason?: string;
    leg_end_reason?: string;
    stop_index?: number;
}
