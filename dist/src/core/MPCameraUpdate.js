"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPCameraUpdate {
    constructor(mode, obj) {
        this.mode = mode;
        this.point = obj.point;
        this.bounds = obj.bounds;
        this.padding = obj.padding;
        this.width = obj.width;
        this.height = obj.height;
        this.zoom = obj.zoom;
        this.position = obj.position;
    }
    static fromPoint(point) {
        return new MPCameraUpdate(Mode.fromPoint, { point: point });
    }
    static fromBounds(bounds, padding, size) {
        return new MPCameraUpdate(Mode.fromBounds, { bounds: bounds, padding: padding, height: size === null || size === void 0 ? void 0 : size.height, width: size === null || size === void 0 ? void 0 : size.width });
    }
    static zoomBy(amount) {
        return new MPCameraUpdate(Mode.zoomBy, { zoom: amount });
    }
    static zoomTo(level) {
        return new MPCameraUpdate(Mode.zoomTo, { zoom: level });
    }
    static fromCameraPosition(position) {
        return new MPCameraUpdate(Mode.fromCameraPosition, { position: position });
    }
}
exports.default = MPCameraUpdate;
var Mode;
(function (Mode) {
    Mode["fromPoint"] = "fromPoint";
    Mode["fromBounds"] = "fromBounds";
    Mode["zoomBy"] = "zoomBy";
    Mode["zoomTo"] = "zoomTo";
    Mode["fromCameraPosition"] = "fromCameraPosition";
})(Mode || (Mode = {}));
//# sourceMappingURL=MPCameraUpdate.js.map