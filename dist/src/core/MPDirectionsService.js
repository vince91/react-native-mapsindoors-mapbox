"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const { DirectionsService } = react_native_1.NativeModules;
class MPDirectionsService {
    constructor(id) {
        this.id = id;
    }
    static async create() {
        return DirectionsService.create().then((resolve) => new MPDirectionsService(resolve));
    }
    async addAvoidWayType(wayType) {
        return DirectionsService.addAvoidWayType(wayType, this.id);
    }
    async clearWayType() {
        return DirectionsService.clearWayType(this.id);
    }
    async addExcludeWayType(wayType) {
        return DirectionsService.addExcludeWayType(wayType, this.id);
    }
    async clearExcludeWayType() {
        return DirectionsService.clearExcludeWayType(this.id);
    }
    async setIsDeparture(isDeparture) {
        return DirectionsService.setIsDeparture(isDeparture, this.id);
    }
    async getRoute(origin, destination, stops = null, optimze = false) {
        var res;
        if (stops === null) {
            res = await DirectionsService.getRoute(JSON.stringify(origin), JSON.stringify(destination), stops, optimze, this.id);
        }
        else {
            let stopsAsJson = stops.map(stop => JSON.stringify(stop));
            res = await DirectionsService.getRoute(JSON.stringify(origin), JSON.stringify(destination), stopsAsJson, optimze, this.id);
        }
        if (res.route !== undefined) {
            return Promise.resolve(index_1.MPRoute.create(JSON.parse(res.route)));
        }
        else {
            return Promise.reject(index_1.MPError.create(JSON.parse(res.error)));
        }
    }
    async setTravelMode(travelMode) {
        return DirectionsService.setTravelMode(travelMode, this.id);
    }
    async setTime(time) {
        return DirectionsService.setTime(time, this.id);
    }
}
exports.default = MPDirectionsService;
//# sourceMappingURL=MPDirectionsService.js.map