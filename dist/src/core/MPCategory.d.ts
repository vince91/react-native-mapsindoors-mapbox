import { MPDataField } from "../../index";
export default class MPCategory {
    readonly key: string;
    readonly value: string;
    readonly fields?: Map<string, MPDataField>;
    private constructor();
    static create(object: MPCategoryParams): MPCategory;
}
export interface MPCategoryParams {
    key: string;
    value: string;
    fields?: Map<string, MPDataField>;
}
