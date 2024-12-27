import { MPRouteProperty, MPRouteCoordinate } from "../../index";
export default class MPRouteStep {
    readonly distance?: MPRouteProperty;
    readonly duration?: MPRouteProperty;
    readonly steps?: MPRouteStep[];
    readonly geometry?: MPRouteCoordinate[];
    readonly highway?: string;
    readonly abutters?: string;
    readonly maneuver?: string;
    readonly startLocation?: MPRouteCoordinate;
    readonly endLocation?: MPRouteCoordinate;
    readonly htmlInstructions?: string;
    readonly travelMode?: string;
    readonly availableTravelModes?: string[];
    private constructor();
    static create(object: MPRouteStepParams): MPRouteStep;
    toJSON(): MPRouteStepParams;
}
export interface MPRouteStepParams {
    distance?: MPRouteProperty;
    duration?: MPRouteProperty;
    steps?: MPRouteStep[];
    geometry?: MPRouteCoordinate[];
    highway?: string;
    abutters?: string;
    maneuver?: string;
    start_location?: MPRouteCoordinate;
    end_location?: MPRouteCoordinate;
    html_instructions?: string;
    travel_mode?: string;
    available_travel_modes?: string[];
}
