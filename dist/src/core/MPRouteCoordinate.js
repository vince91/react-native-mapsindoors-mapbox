"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPRouteCoordinate {
    constructor(latitude, longitude, floorIndex, floorName) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.floorIndex = floorIndex;
        this.floorName = floorName;
    }
    static create(object) {
        return new MPRouteCoordinate(object === null || object === void 0 ? void 0 : object.lat, object === null || object === void 0 ? void 0 : object.lng, object === null || object === void 0 ? void 0 : object.zLevel, object === null || object === void 0 ? void 0 : object.floor_name);
    }
    toJSON() {
        return {
            lat: this.latitude,
            lng: this.longitude,
            zLevel: this.floorIndex,
            floor_name: this.floorName,
        };
    }
}
exports.default = MPRouteCoordinate;
//# sourceMappingURL=MPRouteCoordinate.js.map