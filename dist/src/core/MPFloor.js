"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPEntity_1 = require("./MPEntity");
const index_1 = require("../../index");
const react_native_1 = require("react-native");
class MPFloor extends MPEntity_1.default {
    constructor(id, name, geometry, aliases, floorIndex, buildingId) {
        super("MPFloor");
        this.id = id;
        this.name = name;
        this.geometry = geometry;
        this.aliases = aliases;
        this.floorIndex = floorIndex;
        this.buildingId = buildingId;
    }
    get isPoint() {
        return false;
    }
    static create(object) {
        var _a, _b;
        var multiPolygon;
        if (react_native_1.Platform.OS === 'ios') {
            multiPolygon = index_1.MPMultiPolygon.create({ coordinates: object === null || object === void 0 ? void 0 : object.geometry, bbox: [].concat((_a = object === null || object === void 0 ? void 0 : object.entityBounds) === null || _a === void 0 ? void 0 : _a.northeast, (_b = object === null || object === void 0 ? void 0 : object.entityBounds) === null || _b === void 0 ? void 0 : _b.southwest) });
        }
        else {
            multiPolygon = index_1.MPMultiPolygon.create(object === null || object === void 0 ? void 0 : object.geometry);
        }
        return new MPFloor(object === null || object === void 0 ? void 0 : object.id, object === null || object === void 0 ? void 0 : object.name, multiPolygon, object === null || object === void 0 ? void 0 : object.aliases, object === null || object === void 0 ? void 0 : object.floorIndex, object === null || object === void 0 ? void 0 : object.buildingId);
    }
    get floorId() {
        return this.id;
    }
    get displayName() {
        return this.name;
    }
    get bounds() {
        return this.geometry.bounds;
    }
    get position() {
        return this.geometry.bounds.center;
    }
}
MPFloor.defaultGroundFloorIndex = 0;
exports.default = MPFloor;
//# sourceMappingURL=MPFloor.js.map