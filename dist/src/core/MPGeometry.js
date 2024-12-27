"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPUtils_1 = require("./MPUtils");
class MPGeometry {
    async contains(point) {
        return MPUtils_1.default.geometryIsInside(point, this);
    }
    toJson() {
        return JSON.stringify(this);
    }
}
MPGeometry.point = "Point";
MPGeometry.polygon = "Polygon";
MPGeometry.multiPolygon = "MultiPolygon";
exports.default = MPGeometry;
//# sourceMappingURL=MPGeometry.js.map