"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPUtils_1 = require("./MPUtils");
class MPSettings3D {
    constructor(_extrusionOpacity, _wallOpacity) {
        this._extrusionOpacity = _extrusionOpacity;
        this._wallOpacity = _wallOpacity;
    }
    static create(object) {
        return new MPSettings3D(object === null || object === void 0 ? void 0 : object.extrusionOpacity, object === null || object === void 0 ? void 0 : object.wallOpacity);
    }
    set extrusionOpacity(opacity) {
        this._extrusionOpacity = opacity;
        MPUtils_1.default.setExtrusionOpacity(opacity);
    }
    get extrusionOpacity() {
        return this._extrusionOpacity;
    }
    set wallOpacity(opacity) {
        this._wallOpacity = opacity;
        MPUtils_1.default.setWallOpacity(opacity);
    }
    get wallOpacity() {
        return this._wallOpacity;
    }
}
exports.default = MPSettings3D;
//# sourceMappingURL=MPSettings3D.js.map