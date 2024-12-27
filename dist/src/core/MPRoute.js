"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
class MPRoute {
    constructor(legs, copyrights, summary, warnings, restrictions, bounds, ordered_stop_indexes) {
        this.legs = legs;
        this.copyrights = copyrights;
        this.summary = summary;
        this.warnings = warnings;
        this.restrictions = restrictions;
        this.bounds = bounds;
        this.ordered_stop_indexes = ordered_stop_indexes;
    }
    static create(object) {
        return new MPRoute((object === null || object === void 0 ? void 0 : object.legs) ? object === null || object === void 0 ? void 0 : object.legs.map((leg) => index_1.MPRouteLeg.create(leg)) : undefined, object === null || object === void 0 ? void 0 : object.copyrights, object === null || object === void 0 ? void 0 : object.summary, object === null || object === void 0 ? void 0 : object.warnings, object === null || object === void 0 ? void 0 : object.restrictions, (object === null || object === void 0 ? void 0 : object.bounds) ? index_1.MPBounds.create(object === null || object === void 0 ? void 0 : object.bounds) : undefined, object === null || object === void 0 ? void 0 : object.ordered_stop_indexes);
    }
}
exports.default = MPRoute;
//# sourceMappingURL=MPRoute.js.map