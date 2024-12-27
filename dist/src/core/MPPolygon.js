"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const MPUtils_1 = require("./MPUtils");
class MPPolygon extends index_1.MPGeometry {
    constructor(_coordinates, _bbox) {
        super();
        this._coordinates = _coordinates;
        this._bbox = _bbox;
    }
    set bbox(box) {
        this._bbox = box;
        this.clearCache();
    }
    get bbox() {
        return this._bbox;
    }
    set coordinates(coordinates) {
        this._coordinates = coordinates;
        this.clearCache();
    }
    get coordinates() {
        return this._coordinates;
    }
    get bounds() {
        if (this._bounds == undefined) {
            this._bounds = index_1.MPBounds.fromBBox(this._bbox);
        }
        return this._bounds;
    }
    async getArea() {
        if (this._area == undefined) {
            this._area = await MPUtils_1.default.geometryArea(this);
        }
        return Promise.resolve(this._area);
    }
    get position() {
        return this.bounds.center;
    }
    get type() {
        return index_1.MPGeometry.polygon;
    }
    static create(object) {
        return new MPPolygon(object === null || object === void 0 ? void 0 : object.coordinates, object === null || object === void 0 ? void 0 : object.bbox);
    }
    async distanceToClosestEdge(point) {
        return MPUtils_1.default.polygonDistanceToClosestEdge(point, this);
    }
    clearCache() {
        this._area = undefined;
        this._bounds = undefined;
    }
    toJSON() {
        return {
            type: this.type,
            coordinates: this._coordinates,
            bbox: this._bbox,
        };
    }
}
exports.default = MPPolygon;
//# sourceMappingURL=MPPolygon.js.map