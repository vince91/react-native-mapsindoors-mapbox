"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPBuilding_1 = require("./MPBuilding");
const MPCollection_1 = require("./MPCollection");
class MPBuildingCollection extends MPCollection_1.default {
    constructor(buildings) {
        super();
        this.map = new Map(buildings.map((building) => [building.buildingId, building]));
        this.nameMap = new Map(buildings.map((building) => [building.administrativeId.toLowerCase(), building]));
    }
    getBuildingByAdminId(id) {
        return this.nameMap.get(id.toLowerCase());
    }
    static create(object) {
        let buildings = object === null || object === void 0 ? void 0 : object.map((building) => MPBuilding_1.default.create(building));
        return new MPBuildingCollection(buildings);
    }
}
exports.default = MPBuildingCollection;
//# sourceMappingURL=MPBuildingCollection.js.map