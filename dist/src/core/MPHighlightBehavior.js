"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPHighlightBehavior {
    constructor(allowFloorChange, moveCamera, animationDuration, showInfoWindow, zoomToFit) {
        this.allowFloorChange = allowFloorChange;
        this.moveCamera = moveCamera;
        this.animationDuration = animationDuration;
        this.showInfoWindow = showInfoWindow;
        this.zoomToFit = zoomToFit;
    }
    static create(object) {
        var _a, _b, _c, _d, _e;
        return new MPHighlightBehavior((_a = object === null || object === void 0 ? void 0 : object.allowFloorChange) !== null && _a !== void 0 ? _a : false, (_b = object === null || object === void 0 ? void 0 : object.moveCamera) !== null && _b !== void 0 ? _b : false, (_c = object === null || object === void 0 ? void 0 : object.animationDuration) !== null && _c !== void 0 ? _c : 0, (_d = object === null || object === void 0 ? void 0 : object.showInfoWindow) !== null && _d !== void 0 ? _d : false, (_e = object === null || object === void 0 ? void 0 : object.zoomToFit) !== null && _e !== void 0 ? _e : true);
    }
    ;
}
exports.default = MPHighlightBehavior;
//# sourceMappingURL=MPHighlightBehavior.js.map