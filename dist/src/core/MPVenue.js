"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const MPEntity_1 = require("./MPEntity");
const MPUtils_1 = require("./MPUtils");
class MPVenue extends MPEntity_1.default {
    constructor(id, administrativeId, tilesUrl, mapStyles, geometry, defaultFloor, venueInfo, anchor, entryPoints, externalId, graphId) {
        super("MPVenue");
        this.id = id;
        this.administrativeId = administrativeId;
        this.tilesUrl = tilesUrl;
        this.mapStyles = mapStyles;
        this.geometry = geometry;
        this.defaultFloor = defaultFloor;
        this.venueInfo = venueInfo;
        this.anchor = anchor;
        this.entryPoints = entryPoints;
        this.externalId = externalId;
        this.graphId = graphId;
    }
    static create(object) {
        var _a, _b, _c, _d;
        var polygon;
        if (react_native_1.Platform.OS === 'ios') {
            polygon = index_1.MPPolygon.create({ coordinates: object === null || object === void 0 ? void 0 : object.geometry, bbox: [].concat((_a = object === null || object === void 0 ? void 0 : object.bbox) === null || _a === void 0 ? void 0 : _a.northeast, (_b = object === null || object === void 0 ? void 0 : object.bbox) === null || _b === void 0 ? void 0 : _b.southwest) });
        }
        else {
            polygon = index_1.MPPolygon.create(object === null || object === void 0 ? void 0 : object.geometry);
        }
        return new MPVenue(object === null || object === void 0 ? void 0 : object.id, object === null || object === void 0 ? void 0 : object.name, object === null || object === void 0 ? void 0 : object.tilesUrl, (_c = object === null || object === void 0 ? void 0 : object.styles) === null || _c === void 0 ? void 0 : _c.map((style) => index_1.MPMapStyle.create(style)), polygon, object === null || object === void 0 ? void 0 : object.defaultFloor, index_1.MPVenueInfo.create(object === null || object === void 0 ? void 0 : object.venueInfo), index_1.MPPoint.create(object === null || object === void 0 ? void 0 : object.anchor), (_d = object === null || object === void 0 ? void 0 : object.entryPoints) === null || _d === void 0 ? void 0 : _d.map((entryPoint) => index_1.MPPoint.create(entryPoint)), object === null || object === void 0 ? void 0 : object.externalId, object === null || object === void 0 ? void 0 : object.graphId);
    }
    get name() {
        var _a;
        return (_a = this.venueInfo) === null || _a === void 0 ? void 0 : _a.name;
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
    get defaultMapStyle() {
        return this.mapStyles[0];
    }
    getField(key) {
        var _a;
        if (key !== undefined) {
            return (_a = this.venueInfo.fields) === null || _a === void 0 ? void 0 : _a.get(key);
        }
    }
    isMapStyleValid(style) {
        if (style) {
            this.mapStyles.forEach((value) => {
                if (style == value) {
                    return true;
                }
            });
        }
        return false;
    }
    async hasGraph() {
        return MPUtils_1.default.venueHasGraph(this.id);
    }
    async contains(point) {
        return this.geometry.contains(point);
    }
    toJSON() {
        return {
            id: this.id,
            graphId: this.graphId,
            name: this.administrativeId,
            tilesUrl: this.tilesUrl,
            styles: this.mapStyles,
            geometry: this.geometry,
            defaultFloor: this.defaultFloor,
            venueInfo: this.venueInfo,
            anchor: this.anchor.toJSON(),
            entryPoints: this.entryPoints,
            externalId: this.externalId,
        };
    }
}
exports.default = MPVenue;
//# sourceMappingURL=MPVenue.js.map