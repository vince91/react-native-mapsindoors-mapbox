import { MPBounds } from "../../index";
export default class MPFilter {
    take?: number;
    skip?: number;
    depth?: number;
    floorIndex?: number;
    categories?: string[];
    locations?: string[];
    types?: string[];
    parents?: string[];
    mapExtend?: MPBounds;
    geometry?: MPBounds;
    ignoreLocationSearchableStatus?: boolean;
    ignoreLocationActiveStatus?: boolean;
    private constructor();
    static create(object?: MPFilterParams): MPFilter;
}
export interface MPFilterParams {
    take?: number;
    skip?: number;
    depth?: number;
    floorIndex?: number;
    categories?: string[];
    locations?: string[];
    types?: string[];
    parents?: string[];
    mapExtend?: MPBounds;
    geometry?: MPBounds;
    ignoreLocationSearchableStatus?: boolean;
    ignoreLocationActiveStatus?: boolean;
}
