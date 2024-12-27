import { MPPoint } from "../../index";
export default abstract class MPEntity {
    abstract position?: MPPoint;
    abstract get isPoint(): boolean;
    readonly type: string;
    protected constructor(type: string);
    toJson(): string;
}
