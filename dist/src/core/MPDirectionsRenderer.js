"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const EventNames_1 = require("./EventNames");
const { DirectionsRenderer } = react_native_1.NativeModules;
class MPDirectionsRenderer {
    get defaultRouteStopIcon() {
        return this._defaultRouteStopIcon;
    }
    constructor(nativeEventEmitter) {
        this.eventEmitter = new nativeEventEmitter(DirectionsRenderer);
    }
    async clear() {
        await DirectionsRenderer.clear();
    }
    async nextLeg() {
        await DirectionsRenderer.nextLeg();
    }
    async previousLeg() {
        await DirectionsRenderer.previousLeg();
    }
    async setRoute(route, stopIcons = null, legIndex = 0) {
        var iconsAsString = new Map();
        if (stopIcons !== null) {
            stopIcons.forEach((icon, index) => {
                iconsAsString.set(index, icon.getImage().toString());
            });
        }
        await DirectionsRenderer.setRoute(JSON.stringify(route), JSON.stringify(Object.fromEntries(iconsAsString.entries())), legIndex);
    }
    async setDefaultRouteStopIcon(icon) {
        this._defaultRouteStopIcon = icon;
        await DirectionsRenderer.setDefaultRouteStopIcon(icon.getImage().toString());
    }
    async setAnimatedPolyline(animated, repeating, durationMs) {
        await DirectionsRenderer.setAnimatedPolyline(animated, repeating, durationMs);
    }
    async showRouteLegButtons(show) {
        await DirectionsRenderer.showRouteLegButtons(show);
    }
    async selectLegIndex(legIndex) {
        await DirectionsRenderer.selectLegIndex(legIndex).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getSelectedLegFloorIndex() {
        return DirectionsRenderer.getSelectedLegFloorIndex();
    }
    async setCameraAnimationDuration(durationMs) {
        await DirectionsRenderer.setCameraAnimationDuration(durationMs);
    }
    async setCameraViewFitMode(fitMode) {
        let cameraFitMode;
        switch (fitMode) {
            case index_1.MPCameraViewFitMode.northAligned: {
                cameraFitMode = 0;
                break;
            }
            case index_1.MPCameraViewFitMode.firstStepAligned: {
                cameraFitMode = 1;
                break;
            }
            case index_1.MPCameraViewFitMode.startToEndAligned: {
                cameraFitMode = 2;
                break;
            }
            case index_1.MPCameraViewFitMode.none: {
                cameraFitMode = 3;
                break;
            }
        }
        return await DirectionsRenderer.setCameraViewFitMode(cameraFitMode);
    }
    async setOnLegSelectedListener(listener) {
        var _a, _b;
        await DirectionsRenderer.setOnLegSelectedListener();
        (_a = this.onLegSelectedSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onLegSelectedSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onLegSelected, event => {
                const leg = event.leg;
                listener(leg);
            });
        }
    }
}
exports.default = MPDirectionsRenderer;
//# sourceMappingURL=MPDirectionsRenderer.js.map