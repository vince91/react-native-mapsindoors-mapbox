"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const MPEntity_1 = require("./MPEntity");
const MPPropertyData_1 = require("./MPPropertyData");
const MPLocationSettings_1 = require("./MPLocationSettings");
class MPLocation extends MPEntity_1.default {
    get isPoint() {
        return this.geometry instanceof index_1.MPPoint;
    }
    get position() {
        var _a;
        return ((_a = this.properties) === null || _a === void 0 ? void 0 : _a.anchor) ? this.properties.anchor : new index_1.MPPoint(0, 0);
    }
    constructor(id, restrictions, geometry, properties) {
        var _a;
        super("MPLocation");
        this.id = id;
        this.restrictions = restrictions;
        this.geometry = geometry;
        this.properties = properties;
        switch ((_a = this.geometry) === null || _a === void 0 ? void 0 : _a.type) {
            case index_1.MPGeometry.multiPolygon:
            case index_1.MPGeometry.polygon: {
                this.bounds = this.geometry.bounds;
                break;
            }
            case index_1.MPGeometry.point:
            default: {
                this.bounds = new index_1.MPBounds(this.position, this.position);
                break;
            }
        }
    }
    static create(object) {
        var _a, _b, _c, _d, _e;
        let geo;
        if (object === null || object === void 0 ? void 0 : object.geometry) {
            if (react_native_1.Platform.OS === 'ios') {
                switch (object === null || object === void 0 ? void 0 : object.geometryType) {
                    case index_1.MPGeometry.point:
                        geo = index_1.MPPoint.create(object === null || object === void 0 ? void 0 : object.geometry);
                        break;
                    case index_1.MPGeometry.polygon:
                        geo = index_1.MPPolygon.create({ coordinates: object === null || object === void 0 ? void 0 : object.geometry, bbox: [].concat((_a = object === null || object === void 0 ? void 0 : object.entityBounds) === null || _a === void 0 ? void 0 : _a.northeast, (_b = object === null || object === void 0 ? void 0 : object.entityBounds) === null || _b === void 0 ? void 0 : _b.southwest) });
                        break;
                    case index_1.MPGeometry.multiPolygon:
                        geo = index_1.MPMultiPolygon.create({ coordinates: object === null || object === void 0 ? void 0 : object.geometry, bbox: [].concat((_c = object === null || object === void 0 ? void 0 : object.entityBounds) === null || _c === void 0 ? void 0 : _c.northeast, (_d = object === null || object === void 0 ? void 0 : object.entityBounds) === null || _d === void 0 ? void 0 : _d.southwest) });
                        break;
                    default:
                        break;
                }
            }
            else {
                switch ((_e = object === null || object === void 0 ? void 0 : object.geometry) === null || _e === void 0 ? void 0 : _e.type) {
                    case index_1.MPGeometry.point:
                        geo = index_1.MPPoint.create(object === null || object === void 0 ? void 0 : object.geometry);
                        break;
                    case index_1.MPGeometry.polygon:
                        geo = index_1.MPPolygon.create(object === null || object === void 0 ? void 0 : object.geometry);
                        break;
                    case index_1.MPGeometry.multiPolygon:
                        geo = index_1.MPMultiPolygon.create(object === null || object === void 0 ? void 0 : object.geometry);
                        break;
                    default:
                        break;
                }
            }
        }
        if (object && object.properties && react_native_1.Platform.OS === 'ios') {
            object.properties.locationSettings = object.locationSettings;
        }
        return new MPLocation(object === null || object === void 0 ? void 0 : object.id, object === null || object === void 0 ? void 0 : object.restrictions, geo, MPPropertyData_1.default.create(object === null || object === void 0 ? void 0 : object.properties, object === null || object === void 0 ? void 0 : object.id));
    }
    get name() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.name;
    }
    get aliases() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.aliases;
    }
    get categories() {
        var _a;
        return (((_a = this.properties) === null || _a === void 0 ? void 0 : _a.categories) !== undefined) ?
            Array.from(this.properties.categories.values()) :
            undefined;
    }
    get floorIndex() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.floor;
    }
    get floorName() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.floorName;
    }
    get buildingName() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.building;
    }
    get venueName() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.venue;
    }
    get typeName() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.type;
    }
    get description() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.description;
    }
    get externalId() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.externalId;
    }
    get activeFrom() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.activeFrom;
    }
    get activeTo() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.activeTo;
    }
    get imageUrl() {
        var _a;
        return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.imageUrl;
    }
    isBookable() {
        var _a;
        return ((_a = this.properties) === null || _a === void 0 ? void 0 : _a.bookable) ? this.properties.bookable : false;
    }
    set selectable(selectable) {
        var _a;
        if ((_a = this.properties) === null || _a === void 0 ? void 0 : _a.locationSettings) {
            this.properties.locationSettings.selectable = selectable;
        }
        else if (this.properties) {
            this.properties.locationSettings = MPLocationSettings_1.default.create(this.name, { selectable });
            this.properties.locationSettings.selectable = selectable;
        }
    }
    get selectable() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.properties) === null || _a === void 0 ? void 0 : _a.locationSettings) === null || _b === void 0 ? void 0 : _b.selectable) !== null && _c !== void 0 ? _c : null;
    }
    get baseType() {
        var _a;
        switch ((_a = this.properties) === null || _a === void 0 ? void 0 : _a.type) {
            case "area": {
                return index_1.MPLocationType.area;
            }
            case "venue": {
                return index_1.MPLocationType.venue;
            }
            case "building": {
                return index_1.MPLocationType.building;
            }
            case "room": {
                return index_1.MPLocationType.room;
            }
            case "floor": {
                return index_1.MPLocationType.floor;
            }
            case "asset": {
                return index_1.MPLocationType.asset;
            }
            case "poi":
            default: {
                return index_1.MPLocationType.poi;
            }
        }
    }
    getProperty(key) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        switch (key) {
            case index_1.MPLocationPropertyNames.name: {
                return (_a = this.properties) === null || _a === void 0 ? void 0 : _a.name;
            }
            case index_1.MPLocationPropertyNames.aliases: {
                return (_b = this.properties) === null || _b === void 0 ? void 0 : _b.aliases;
            }
            case index_1.MPLocationPropertyNames.categories: {
                return (_c = this.properties) === null || _c === void 0 ? void 0 : _c.categories;
            }
            case index_1.MPLocationPropertyNames.floor: {
                return (_d = this.properties) === null || _d === void 0 ? void 0 : _d.floor;
            }
            case index_1.MPLocationPropertyNames.floorName: {
                return (_e = this.properties) === null || _e === void 0 ? void 0 : _e.floorName;
            }
            case index_1.MPLocationPropertyNames.building: {
                return (_f = this.properties) === null || _f === void 0 ? void 0 : _f.building;
            }
            case index_1.MPLocationPropertyNames.venue: {
                return (_g = this.properties) === null || _g === void 0 ? void 0 : _g.venue;
            }
            case index_1.MPLocationPropertyNames.type: {
                return (_h = this.properties) === null || _h === void 0 ? void 0 : _h.type;
            }
            case index_1.MPLocationPropertyNames.description: {
                return (_j = this.properties) === null || _j === void 0 ? void 0 : _j.description;
            }
            case index_1.MPLocationPropertyNames.roomId:
            case index_1.MPLocationPropertyNames.externalId: {
                return (_k = this.properties) === null || _k === void 0 ? void 0 : _k.externalId;
            }
            case index_1.MPLocationPropertyNames.activeFrom: {
                return (_l = this.properties) === null || _l === void 0 ? void 0 : _l.activeFrom;
            }
            case index_1.MPLocationPropertyNames.activeTo: {
                return (_m = this.properties) === null || _m === void 0 ? void 0 : _m.activeTo;
            }
            case index_1.MPLocationPropertyNames.contact: {
                return (_o = this.properties) === null || _o === void 0 ? void 0 : _o.contact;
            }
            case index_1.MPLocationPropertyNames.fields: {
                return (_p = this.properties) === null || _p === void 0 ? void 0 : _p.fields;
            }
            case index_1.MPLocationPropertyNames.imageURL: {
                return (_q = this.properties) === null || _q === void 0 ? void 0 : _q.imageUrl;
            }
            case index_1.MPLocationPropertyNames.locationType: {
                return (_r = this.properties) === null || _r === void 0 ? void 0 : _r.locationType;
            }
            case index_1.MPLocationPropertyNames.anchor: {
                return (_s = this.properties) === null || _s === void 0 ? void 0 : _s.anchor;
            }
            case index_1.MPLocationPropertyNames.bookable: {
                return (_t = this.properties) === null || _t === void 0 ? void 0 : _t.bookable;
            }
        }
    }
}
exports.default = MPLocation;
//# sourceMappingURL=MPLocation.js.map