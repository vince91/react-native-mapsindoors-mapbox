export default class MPRouteCoordinate {
    readonly latitude?: number;
    readonly longitude?: number;
    readonly floorIndex?: number;
    readonly floorName?: string;
    private constructor();
    static create(object: MPRouteCoordinateParams): MPRouteCoordinate;
    toJSON(): MPRouteCoordinateParams;
}
export interface MPRouteCoordinateParams {
    lat?: number;
    lng?: number;
    zLevel?: number;
    floor_name?: string;
}
