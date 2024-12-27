"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPFilterBehavior {
    constructor(allowFloorChange, moveCamera, animationDuration, showInfoWindow, zoomToFit) {
        this.allowFloorChange = allowFloorChange;
        this.moveCamera = moveCamera;
        this.animationDuration = animationDuration;
        this.showInfoWindow = showInfoWindow;
        this.zoomToFit = zoomToFit;
    }
    static create(object) {
        return new MPFilterBehavior((object === null || object === void 0 ? void 0 : object.allowFloorChange) ? object.allowFloorChange : false, (object === null || object === void 0 ? void 0 : object.moveCamera) ? object.moveCamera : false, (object === null || object === void 0 ? void 0 : object.animationDuration) ? object.animationDuration : 0, (object === null || object === void 0 ? void 0 : object.showInfoWindow) ? object.showInfoWindow : false, (object === null || object === void 0 ? void 0 : object.zoomToFit) ? object === null || object === void 0 ? void 0 : object.zoomToFit : true);
    }
    ;
}
exports.default = MPFilterBehavior;
//# sourceMappingURL=MPFilterBehavior.js.map