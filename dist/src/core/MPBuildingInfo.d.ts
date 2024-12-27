import MPDataField from "./MPDataField";
import { MPEntityInfo } from "./MPEntityInfo";
export default class MPBuildingInfo extends MPEntityInfo {
    static create(object: MPBuildingInfoParams): MPBuildingInfo;
}
export interface MPBuildingInfoParams {
    name: string;
    aliases?: string[];
    fields?: Map<string, MPDataField>;
    language?: string;
}
