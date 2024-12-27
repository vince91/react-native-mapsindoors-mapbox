import MPSize from "./MPSize";
export default class MPIconSize implements MPSize {
    readonly height: number;
    readonly width: number;
    private constructor();
    static create(object: MPSize): MPIconSize;
}
