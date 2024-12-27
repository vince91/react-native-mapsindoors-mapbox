import { MPBounds, MPRouteLeg, MPBoundsParams, MPRouteLegParams } from "../../index";
export default class MPRoute {
    readonly legs?: MPRouteLeg[];
    readonly copyrights?: string;
    readonly summary?: string;
    readonly warnings?: string[];
    readonly restrictions?: string[];
    readonly bounds?: MPBounds;
    readonly ordered_stop_indexes?: number[];
    private constructor();
    static create(object: MPRouteParams): MPRoute;
}
export interface MPRouteParams {
    legs?: MPRouteLegParams[];
    copyrights?: string;
    summary?: string;
    warnings?: string[];
    restrictions?: string[];
    bounds?: MPBoundsParams;
    ordered_stop_indexes?: number[];
}
