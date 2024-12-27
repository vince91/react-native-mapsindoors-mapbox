import MPDataField from "./MPDataField";
import { MPEntityInfo } from "./MPEntityInfo";
export default class MPVenueInfo extends MPEntityInfo {
    static create(object: MPVenueInfoParams): MPVenueInfo;
}
export interface MPVenueInfoParams {
    name: string;
    aliases?: string[];
    fields?: Map<string, MPDataField>;
    language?: string;
}
