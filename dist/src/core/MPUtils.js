"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const { UtilsModule } = react_native_1.NativeModules;
class MPUtils {
    constructor() { }
    static async venueHasGraph(venueId) {
        return UtilsModule.venueHasGraph(venueId);
    }
    static async pointAngleBetween(it, other) {
        return UtilsModule.pointAngleBetween(JSON.stringify(it), JSON.stringify(other));
    }
    static async pointDistanceTo(it, other) {
        return UtilsModule.pointDistanceTo(JSON.stringify(it), JSON.stringify(other));
    }
    static async geometryIsInside(point, geometry) {
        return UtilsModule.geometryIsInside(JSON.stringify(point), JSON.stringify(geometry));
    }
    static async geometryArea(geometry) {
        return UtilsModule.geometryArea(JSON.stringify(geometry));
    }
    static async polygonDistanceToClosestEdge(point, polygon) {
        return UtilsModule.polygonDistanceToClosestEdge(JSON.stringify(point), JSON.stringify(polygon));
    }
    static async parseMapClientUrl(venueId, locationId) {
        return UtilsModule.parseMapClientUrl(venueId, locationId);
    }
    static async setCollisionHandling(collisionHandling) {
        return UtilsModule.setCollisionHandling(collisionHandling.valueOf());
    }
    static async setEnableClustering(enableClustering) {
        return UtilsModule.enableClustering(enableClustering);
    }
    static async setNewSelection(isNewSelection) {
        return Promise.resolve(UtilsModule.setNewSelection(isNewSelection));
    }
    static async setExtrusionOpacity(opacity) {
        return UtilsModule.setExtrusionOpacity(opacity);
    }
    static async setWallOpacity(opacity) {
        return UtilsModule.setWallOpacity(opacity);
    }
    static async setSelectable(id, selectable) {
        return UtilsModule.setSelectable(id, selectable);
    }
}
exports.default = MPUtils;
//# sourceMappingURL=MPUtils.js.map