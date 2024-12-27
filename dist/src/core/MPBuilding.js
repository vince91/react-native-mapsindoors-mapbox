"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPEntity_1 = require("./MPEntity");
const index_1 = require("../../index");
const MPBuildingInfo_1 = require("./MPBuildingInfo");
const react_native_1 = require("react-native");
class MPBuilding extends MPEntity_1.default {
    constructor(id, administrativeId, externalId, venueId, anchor, geometry, _floors, defaultFloor, address, buildingInfo) {
        super("MPBuilding");
        this.id = id;
        this.administrativeId = administrativeId;
        this.externalId = externalId;
        this.venueId = venueId;
        this.anchor = anchor;
        this.geometry = geometry;
        this._floors = _floors;
        this.defaultFloor = defaultFloor;
        this.address = address;
        this.buildingInfo = buildingInfo;
    }
    static create(object) {
        var _a, _b;
        let floors = new Map();
        if ((object === null || object === void 0 ? void 0 : object.floors) !== undefined) {
            floors = new Map(Object.entries(object === null || object === void 0 ? void 0 : object.floors).map(([key, value]) => [Number.parseInt(key), index_1.MPFloor.create(value)]));
        }
        floors.forEach((value) => {
            value.buildingId = object === null || object === void 0 ? void 0 : object.id;
        });
        var polygon;
        if (react_native_1.Platform.OS === 'ios') {
            polygon = index_1.MPPolygon.create({ coordinates: object === null || object === void 0 ? void 0 : object.geometry, bbox: [].concat((_a = object === null || object === void 0 ? void 0 : object.boundingBox) === null || _a === void 0 ? void 0 : _a.northeast, (_b = object === null || object === void 0 ? void 0 : object.boundingBox) === null || _b === void 0 ? void 0 : _b.southwest) });
        }
        else {
            polygon = index_1.MPPolygon.create(object === null || object === void 0 ? void 0 : object.geometry);
        }
        return new MPBuilding(object === null || object === void 0 ? void 0 : object.id, object === null || object === void 0 ? void 0 : object.administrativeId, object === null || object === void 0 ? void 0 : object.externalId, object === null || object === void 0 ? void 0 : object.venueId, index_1.MPPoint.create(object === null || object === void 0 ? void 0 : object.anchor), polygon, floors, object === null || object === void 0 ? void 0 : object.defaultFloor, object === null || object === void 0 ? void 0 : object.address, MPBuildingInfo_1.default.create(object === null || object === void 0 ? void 0 : object.buildingInfo));
    }
    get buildingId() {
        return this.id;
    }
    get bounds() {
        return this.geometry.bounds;
    }
    get position() {
        return this.anchor;
    }
    get isPoint() {
        return false;
    }
    get name() {
        var _a;
        return ((_a = this.buildingInfo) === null || _a === void 0 ? void 0 : _a.name) ? this.buildingInfo.name : "";
    }
    get aliases() {
        var _a;
        return ((_a = this.buildingInfo) === null || _a === void 0 ? void 0 : _a.aliases) ? this.buildingInfo.aliases : [];
    }
    get floorCount() {
        return this._floors.size;
    }
    get floors() {
        return Array.from(this._floors.values());
    }
    get initialFloorIndex() {
        return this.defaultFloor ? this.defaultFloor : this.floors[0].floorIndex ? this.floors[0].floorIndex : 0;
    }
    hasFloorIndex(floorIndex) {
        return this._floors.has(floorIndex);
    }
    getFloorByIndex(floorIndex) {
        return this._floors.get(floorIndex);
    }
    getField(key) {
        var _a, _b;
        if (key !== undefined) {
            return (_b = (_a = this.buildingInfo) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b.get(key);
        }
    }
    async contains(point) {
        return this.geometry.contains(point);
    }
    toJSON() {
        return {
            "id": this.id,
            "administrativeId": this.administrativeId,
            "externalId": this.externalId,
            "venueId": this.venueId,
            "anchor": this.anchor.toJSON(),
            "buildingInfo": this.buildingInfo,
            "geometry": this.geometry,
            "floors": this._floors,
            "defaultFloor": this.defaultFloor,
            "address": this.address,
            "boundingBox": this.bounds.toJSON()
        };
    }
}
exports.default = MPBuilding;
//# sourceMappingURL=MPBuilding.js.map