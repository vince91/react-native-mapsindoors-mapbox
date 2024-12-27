"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MPCameraEvent;
(function (MPCameraEvent) {
    MPCameraEvent[MPCameraEvent["finished"] = 0] = "finished";
    MPCameraEvent[MPCameraEvent["cancelled"] = 1] = "cancelled";
    MPCameraEvent[MPCameraEvent["moveStartedApiAnimation"] = 2] = "moveStartedApiAnimation";
    MPCameraEvent[MPCameraEvent["moveStartedDeveloperAnimation"] = 3] = "moveStartedDeveloperAnimation";
    MPCameraEvent[MPCameraEvent["moveStartedGesture"] = 4] = "moveStartedGesture";
    MPCameraEvent[MPCameraEvent["onMove"] = 5] = "onMove";
    MPCameraEvent[MPCameraEvent["moveCancelled"] = 6] = "moveCancelled";
    MPCameraEvent[MPCameraEvent["idle"] = 7] = "idle";
})(MPCameraEvent || (MPCameraEvent = {}));
exports.default = MPCameraEvent;
//# sourceMappingURL=MPCameraEvent.js.map