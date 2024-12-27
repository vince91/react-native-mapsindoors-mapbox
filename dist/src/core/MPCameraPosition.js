"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPPoint_1 = require("./MPPoint");
class MPCameraPosition {
    constructor(zoom, target, tilt, bearing) {
        this.zoom = zoom;
        this.target = target;
        this.tilt = tilt;
        this.bearing = bearing;
    }
    static create(object) {
        const target = object.target instanceof MPPoint_1.default ? object.target : MPPoint_1.default.create(object.target);
        return new MPCameraPosition(object === null || object === void 0 ? void 0 : object.zoom, target, (object === null || object === void 0 ? void 0 : object.bearing) ? object.bearing : 0, (object === null || object === void 0 ? void 0 : object.tilt) ? object.tilt : 0);
    }
}
exports.default = MPCameraPosition;
//# sourceMappingURL=MPCameraPosition.js.map