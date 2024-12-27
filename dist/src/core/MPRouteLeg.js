"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
class MPRouteLeg {
    constructor(steps, distance, duration, startAddress, endAdress, startLocation, endLocation, legStartReason, legEndReason, stopIndex) {
        this.steps = steps;
        this.distance = distance;
        this.duration = duration;
        this.startAddress = startAddress;
        this.endAdress = endAdress;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.legStartReason = legStartReason;
        this.legEndReason = legEndReason;
        this.stopIndex = stopIndex;
    }
    static create(object) {
        return new MPRouteLeg((object === null || object === void 0 ? void 0 : object.steps) ? object === null || object === void 0 ? void 0 : object.steps.map((step) => index_1.MPRouteStep.create(step)) : undefined, index_1.MPRouteProperty.create(object === null || object === void 0 ? void 0 : object.distance), index_1.MPRouteProperty.create(object === null || object === void 0 ? void 0 : object.duration), object === null || object === void 0 ? void 0 : object.start_address, object === null || object === void 0 ? void 0 : object.end_address, index_1.MPRouteCoordinate.create(object === null || object === void 0 ? void 0 : object.start_location), index_1.MPRouteCoordinate.create(object === null || object === void 0 ? void 0 : object.end_location), object === null || object === void 0 ? void 0 : object.leg_start_reason, object === null || object === void 0 ? void 0 : object.leg_end_reason, object === null || object === void 0 ? void 0 : object.stop_index);
    }
    toJSON() {
        return {
            start_address: this.startAddress,
            end_address: this.endAdress,
            start_location: this.startLocation,
            end_location: this.endLocation,
            steps: this.steps,
            distance: this.distance,
            duration: this.duration,
            leg_start_reason: this.legStartReason,
            leg_end_reason: this.legEndReason,
            stop_index: this.stopIndex,
        };
    }
}
exports.default = MPRouteLeg;
//# sourceMappingURL=MPRouteLeg.js.map