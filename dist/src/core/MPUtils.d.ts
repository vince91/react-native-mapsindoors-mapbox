import { MPGeometry, MPPoint, MPCollisionHandling } from '../../index';
export default class MPUtils {
    private constructor();
    static venueHasGraph(venueId: string): Promise<boolean>;
    static pointAngleBetween(it: MPPoint, other: MPPoint): Promise<number>;
    static pointDistanceTo(it: MPPoint, other: MPPoint): Promise<number>;
    static geometryIsInside(point: MPPoint, geometry: MPGeometry): Promise<boolean>;
    static geometryArea(geometry: MPGeometry): Promise<number>;
    static polygonDistanceToClosestEdge(point: MPPoint, polygon: MPGeometry): Promise<number>;
    static parseMapClientUrl(venueId: string, locationId: string): Promise<string>;
    static setCollisionHandling(collisionHandling: MPCollisionHandling): Promise<void>;
    static setEnableClustering(enableClustering: boolean): Promise<void>;
    static setNewSelection(isNewSelection: boolean): Promise<void>;
    static setExtrusionOpacity(opacity: number): Promise<void>;
    static setWallOpacity(opacity: number): Promise<void>;
    static setSelectable(id: string, selectable: boolean): Promise<void>;
}
