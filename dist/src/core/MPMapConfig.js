"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPMapConfig {
    constructor(params) {
        var _a, _b, _c;
        this.useDefaultMapsIndoorsStyle = params.useDefaultMapsIndoorsStyle;
        this.typeface = (_a = params.mapLabelFont) === null || _a === void 0 ? void 0 : _a.typeface;
        this.color = (_b = params.mapLabelFont) === null || _b === void 0 ? void 0 : _b.color;
        this.showHalo = (_c = params.mapLabelFont) === null || _c === void 0 ? void 0 : _c.showHalo;
        this.textSize = params.textSize;
        this.showFloorSelector = params.showFloorSelector;
        this.showInfoWindowOnClick = params.showInfoWindowOnClick;
        this.showUserPosition = params.showUserPosition;
        this.enableTileFadeIn = params.enableTileFadeIn;
        this.floorSelector = params.floorSelector;
        this.mapsIndoorsTransitionLevel = params.mapsIndoorsTransitionLevel;
        this.showMapMarkers = params.showMapMarkers;
        this.showRoadLabels = params.showRoadLabels;
    }
}
exports.default = MPMapConfig;
//# sourceMappingURL=MPMapConfig.js.map