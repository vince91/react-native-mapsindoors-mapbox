import { MPPoint, MPDataField, MPPointParams } from "../../index";
import { MPEntityInfo } from "./MPEntityInfo";
import MPLocationSettings from "./MPLocationSettings";
export default class MPPropertyData extends MPEntityInfo {
    readonly categories?: Map<string, string>;
    readonly floor?: number;
    readonly floorName?: string;
    readonly building?: string;
    readonly venue?: string;
    readonly type?: string;
    readonly description?: string;
    readonly externalId?: string;
    readonly activeFrom?: number;
    readonly activeTo?: number;
    readonly contact?: Map<string, MPDataField>;
    readonly imageUrl?: string;
    readonly locationType?: string;
    readonly bookable?: boolean;
    readonly anchor?: MPPoint;
    locationSettings?: MPLocationSettings;
    private constructor();
    static create(object: MPPropertyDataParams, id?: string): MPPropertyData;
}
export interface MPPropertyDataParams {
    name: string;
    aliases?: string[];
    fields?: Map<string, MPDataField>;
    categories?: Map<string, string>;
    floor?: string | number;
    floorName?: string;
    building?: string;
    venue?: string;
    type?: string;
    description?: string;
    externalId?: string;
    activeFrom?: number;
    activeTo?: number;
    contact?: Map<string, MPDataField>;
    imageURL?: string;
    locationType?: string;
    bookable?: boolean;
    anchor?: MPPointParams;
    locationSettings?: MPLocationSettings;
}
