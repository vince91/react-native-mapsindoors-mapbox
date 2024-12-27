import { MPPoint, MPPointParams, MPBounds, MPMapStyle, MPPolygon, MPVenueInfo, MPDataField } from '../../index';
import MPEntity from "./MPEntity";
export default class MPVenue extends MPEntity {
    readonly id: string;
    readonly administrativeId: string;
    readonly tilesUrl: string;
    readonly mapStyles: MPMapStyle[];
    readonly geometry: MPPolygon;
    readonly defaultFloor: number;
    readonly venueInfo: MPVenueInfo;
    readonly anchor: MPPoint;
    readonly entryPoints: MPPoint[];
    readonly externalId: string;
    readonly graphId?: string;
    constructor(id: string, administrativeId: string, tilesUrl: string, mapStyles: MPMapStyle[], geometry: MPPolygon, defaultFloor: number, venueInfo: MPVenueInfo, anchor: MPPoint, entryPoints: MPPoint[], externalId: string, graphId?: string);
    static create(object: MPVenueParams): MPVenue;
    get name(): string;
    get bounds(): MPBounds;
    get position(): MPPoint;
    get isPoint(): boolean;
    get defaultMapStyle(): MPMapStyle;
    getField(key?: string): MPDataField | undefined;
    isMapStyleValid(style?: MPMapStyle): boolean;
    hasGraph(): Promise<boolean>;
    contains(point: MPPoint): Promise<boolean>;
    toJSON(): MPVenueParams;
}
export interface MPVenueParams {
    id: string;
    name: string;
    externalId: string;
    tilesUrl: string;
    styles: MPMapStyle[];
    geometry: MPPolygon | any;
    defaultFloor: number;
    venueInfo: MPVenueInfo;
    anchor: MPPointParams;
    entryPoints: MPPoint[];
    graphId?: string;
    bbox?: any;
}
