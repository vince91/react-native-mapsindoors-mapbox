import MPEntity from "./MPEntity";
import { MPMultiPolygon, MPBounds, MPPoint } from "../../index";
export default class MPFloor extends MPEntity {
    private readonly id;
    private readonly name;
    readonly geometry?: MPMultiPolygon;
    readonly aliases?: string[];
    readonly floorIndex?: number;
    buildingId?: string;
    static readonly defaultGroundFloorIndex: number;
    private constructor();
    get isPoint(): boolean;
    static create(object: MPFloorParams): MPFloor;
    get floorId(): string;
    get displayName(): string;
    get bounds(): MPBounds;
    get position(): MPPoint;
}
export interface MPFloorParams {
    id: string;
    name: string;
    geometry: MPMultiPolygon | any;
    aliases?: string[];
    floorIndex?: number;
    buildingId?: string;
    entityBounds: any;
}
