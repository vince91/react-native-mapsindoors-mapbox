import { MPDataField } from "../../index";
export declare abstract class MPEntityInfo {
    readonly name: string;
    readonly aliases?: string[];
    readonly fields?: Map<string, MPDataField>;
    readonly language?: string;
    protected constructor(name: string, aliases?: string[], fields?: Map<string, MPDataField>, language?: string);
}
