export default class MPDataField {
    readonly value?: string;
    readonly text?: string;
    readonly type?: string;
    private constructor();
    static create(object: MPDataFieldParams): MPDataField;
}
export interface MPDataFieldParams {
    value?: string;
    text?: string;
    type?: string;
}
