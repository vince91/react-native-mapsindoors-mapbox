import MPCategory from "./MPCategory";
import MPCollection from "./MPCollection";
import MPDataField from "./MPDataField";
export default class MPCategoryCollection extends MPCollection<MPCategory> {
    private constructor();
    getValue(key: string): string | undefined;
    getFields(key: string): Map<string, MPDataField> | undefined;
    static create(object?: any): MPCategoryCollection;
}
