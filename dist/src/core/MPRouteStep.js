"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
class MPRouteStep {
    constructor(distance, duration, steps, geometry, highway, abutters, maneuver, startLocation, endLocation, htmlInstructions, travelMode, availableTravelModes) {
        this.distance = distance;
        this.duration = duration;
        this.steps = steps;
        this.geometry = geometry;
        this.highway = highway;
        this.abutters = abutters;
        this.maneuver = maneuver;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.htmlInstructions = htmlInstructions;
        this.travelMode = travelMode;
        this.availableTravelModes = availableTravelModes;
    }
    static create(object) {
        var _a;
        return new MPRouteStep(index_1.MPRouteProperty.create(object === null || object === void 0 ? void 0 : object.distance), index_1.MPRouteProperty.create(object === null || object === void 0 ? void 0 : object.duration), (object === null || object === void 0 ? void 0 : object.steps) ? object === null || object === void 0 ? void 0 : object.steps.map((subStep) => MPRouteStep.create(subStep)) : undefined, (object === null || object === void 0 ? void 0 : object.geometry) ? object === null || object === void 0 ? void 0 : object.geometry.map((geo) => index_1.MPRouteCoordinate.create(geo)) : undefined, react_native_1.Platform.OS === "ios" ? (_a = object.highway) === null || _a === void 0 ? void 0 : _a.type : object === null || object === void 0 ? void 0 : object.highway, object === null || object === void 0 ? void 0 : object.abutters, object === null || object === void 0 ? void 0 : object.maneuver, index_1.MPRouteCoordinate.create(object === null || object === void 0 ? void 0 : object.start_location), index_1.MPRouteCoordinate.create(object === null || object === void 0 ? void 0 : object.end_location), object === null || object === void 0 ? void 0 : object.html_instructions, object === null || object === void 0 ? void 0 : object.travel_mode, object === null || object === void 0 ? void 0 : object.available_travel_modes);
    }
    toJSON() {
        return {
            distance: this.distance,
            duration: this.duration,
            start_location: this.startLocation,
            end_location: this.endLocation,
            geometry: this.geometry,
            highway: this.highway,
            abutters: this.abutters,
            html_instructions: this.htmlInstructions,
            maneuver: this.maneuver,
            travel_mode: this.travelMode,
            steps: this.steps,
            available_travel_modes: this.availableTravelModes,
        };
    }
}
exports.default = MPRouteStep;
//# sourceMappingURL=MPRouteStep.js.map