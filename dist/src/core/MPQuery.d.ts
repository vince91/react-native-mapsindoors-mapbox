import { MPPoint } from "../../index";
export default class MPQuery {
    readonly query?: string;
    readonly near?: MPPoint;
    readonly queryProperties?: string[];
    private constructor();
    static create(object?: MPQueryParams): MPQuery;
}
export interface MPQueryParams {
    query?: string;
    near?: MPPoint;
    queryProperties?: string[];
}
