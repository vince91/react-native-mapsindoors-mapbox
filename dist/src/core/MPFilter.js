"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPFilter {
    constructor(take, skip, depth, floorIndex, categories, locations, types, parents, mapExtend, geometry, ignoreLocationSearchableStatus, ignoreLocationActiveStatus) {
        this.take = take;
        this.skip = skip;
        this.depth = depth;
        this.floorIndex = floorIndex;
        this.categories = categories;
        this.locations = locations;
        this.types = types;
        this.parents = parents;
        this.mapExtend = mapExtend;
        this.geometry = geometry;
        this.ignoreLocationSearchableStatus = ignoreLocationSearchableStatus;
        this.ignoreLocationActiveStatus = ignoreLocationActiveStatus;
    }
    static create(object) {
        return new MPFilter(object === null || object === void 0 ? void 0 : object.take, object === null || object === void 0 ? void 0 : object.skip, object === null || object === void 0 ? void 0 : object.depth, object === null || object === void 0 ? void 0 : object.floorIndex, object === null || object === void 0 ? void 0 : object.categories, object === null || object === void 0 ? void 0 : object.locations, object === null || object === void 0 ? void 0 : object.types, object === null || object === void 0 ? void 0 : object.parents, object === null || object === void 0 ? void 0 : object.mapExtend, object === null || object === void 0 ? void 0 : object.geometry, object === null || object === void 0 ? void 0 : object.ignoreLocationSearchableStatus, object === null || object === void 0 ? void 0 : object.ignoreLocationActiveStatus);
    }
}
exports.default = MPFilter;
//# sourceMappingURL=MPFilter.js.map