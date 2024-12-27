"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPPoint_1 = require("./MPPoint");
const react_native_1 = require("react-native");
class MPBounds {
    constructor(northeast, southwest) {
        this.northeast = northeast;
        this.southwest = southwest;
        this.northeast = northeast;
        this.southwest = southwest;
    }
    static create(object) {
        var bounds;
        if (object.northeast.lat != null) {
            var northeast = new MPPoint_1.default(object.northeast.lat, object.northeast.lng, object.northeast.zLevel);
            var southwest = new MPPoint_1.default(object.southwest.lat, object.southwest.lng, object.southwest.zLevel);
            bounds = new MPBounds(northeast, southwest);
        }
        else {
            bounds = new MPBounds(object.northeast, object.southwest);
        }
        return bounds;
    }
    static fromBBox(bbox) {
        return new MPBounds(new MPPoint_1.default(bbox[3], bbox[2]), new MPPoint_1.default(bbox[1], bbox[0]));
    }
    get center() {
        let latCenter = (this.northeast.latitude + this.southwest.latitude) / 2;
        let lngCenter = (this.northeast.longitude + this.southwest.longitude) / 2;
        return new MPPoint_1.default(latCenter, lngCenter);
    }
    contains(point) {
        return ((point.latitude <= this.northeast.latitude &&
            point.latitude >= this.southwest.latitude)) &&
            ((point.longitude <= this.northeast.longitude &&
                point.longitude >= this.southwest.longitude));
    }
    toJSON() {
        if (react_native_1.Platform.OS === 'ios') {
            return {
                "northeast": [this.northeast.longitude, this.northeast.latitude],
                "southwest": [this.southwest.longitude, this.southwest.latitude],
            };
        }
        else {
            return {
                "northeast": this.northeast,
                "southwest": this.southwest,
            };
        }
    }
}
MPBounds.Builder = class {
    constructor() {
        this.north = Number.NEGATIVE_INFINITY;
        this.south = Number.POSITIVE_INFINITY;
        this.east = Number.NEGATIVE_INFINITY;
        this.west = Number.POSITIVE_INFINITY;
    }
    include(point) {
        this.north = Math.max(this.north, point.latitude);
        this.south = Math.min(this.south, point.latitude);
        this.east = Math.max(this.east, point.longitude);
        this.west = Math.min(this.west, point.longitude);
    }
    build() {
        if (this.north == Number.POSITIVE_INFINITY) {
            throw Error("Cannot build bounds with no coordinates");
        }
        return new MPBounds(new MPPoint_1.default(this.north, this.east), new MPPoint_1.default(this.south, this.west));
    }
};
exports.default = MPBounds;
//# sourceMappingURL=MPBounds.js.map