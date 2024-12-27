export default class MPLabelGraphic {
    readonly backgroundImage: string;
    readonly stretchX: number[][];
    readonly stretchY: number[][];
    readonly content: number[];
    private constructor();
    static create(object: MPLabelGraphicParams): MPLabelGraphic;
}
export interface MPLabelGraphicParams {
    backgroundImage: string;
    stretchX: number[][];
    stretchY: number[][];
    content: number[];
}
