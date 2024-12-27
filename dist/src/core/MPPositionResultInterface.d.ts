import { MPPoint } from "../../index";
export declare abstract class MPPositionResultInterface {
    point: MPPoint;
    floorIndex?: number;
    bearing?: number;
    accuracy?: number;
    positionProvider: string;
}
