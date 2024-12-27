"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPGeometry_1 = require("./MPGeometry");
const MPUtils_1 = require("./MPUtils");
class MPPoint extends MPGeometry_1.default {
    constructor(latitude, longitude, floorIndex = 0) {
        super();
        this.latitude = latitude;
        this.longitude = longitude;
        this.floorIndex = floorIndex;
    }
    static create(pointParams) {
        if (pointParams === null || pointParams === void 0 ? void 0 : pointParams.coordinates) {
            return new MPPoint(pointParams.coordinates[1], pointParams.coordinates[0], pointParams.coordinates[2]);
        }
        else if (pointParams) {
            const pp = pointParams;
            return new MPPoint(pp[1], pp[0], pp[2]);
        }
    }
    async angleBetween(other) {
        return MPUtils_1.default.pointAngleBetween(this, other);
    }
    async distanceTo(other) {
        return MPUtils_1.default.pointDistanceTo(this, other);
    }
    get position() {
        return this;
    }
    get type() {
        return MPGeometry_1.default.point;
    }
    async getArea() {
        return Promise.resolve(0.5);
    }
    toJSON() {
        return {
            type: this.type,
            coordinates: [this.longitude, this.latitude, this.floorIndex ? this.floorIndex : 0],
        };
    }
}
exports.default = MPPoint;
//# sourceMappingURL=MPPoint.js.map