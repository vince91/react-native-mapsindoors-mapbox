import MPEntity from "./MPEntity";
import { MPPoint, MPPolygon, MPFloor, MPBounds, MPDataField, MPPointParams } from "../../index";
import MPBuildingInfo from "./MPBuildingInfo";
export default class MPBuilding extends MPEntity {
    private readonly id;
    readonly administrativeId: string;
    readonly externalId: string;
    readonly venueId: string;
    private readonly anchor;
    readonly geometry: MPPolygon;
    private readonly _floors;
    readonly defaultFloor: number;
    readonly address: string;
    private readonly buildingInfo?;
    private constructor();
    static create(object: MPBuildingParams): MPBuilding;
    get buildingId(): string;
    get bounds(): MPBounds;
    get position(): MPPoint;
    get isPoint(): boolean;
    get name(): string;
    get aliases(): string[];
    get floorCount(): number;
    get floors(): MPFloor[];
    get initialFloorIndex(): number;
    hasFloorIndex(floorIndex: number): boolean;
    getFloorByIndex(floorIndex: number): MPFloor | undefined;
    getField(key?: string): MPDataField | undefined;
    contains(point: MPPoint): Promise<boolean>;
    toJSON(): MPBuildingParams;
}
export interface MPBuildingParams {
    id: string;
    administrativeId: string;
    externalId: string;
    venueId: string;
    anchor: MPPointParams;
    geometry: MPPolygon | any;
    floors: object;
    defaultFloor: number;
    address: string;
    buildingInfo?: MPBuildingInfo;
    boundingBox?: any;
}
