"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPQuery {
    constructor(query, near, queryProperties) {
        this.query = query;
        this.near = near;
        this.queryProperties = queryProperties;
    }
    static create(object) {
        return new MPQuery(object === null || object === void 0 ? void 0 : object.query, object === null || object === void 0 ? void 0 : object.near, object === null || object === void 0 ? void 0 : object.queryProperties);
    }
}
exports.default = MPQuery;
//# sourceMappingURL=MPQuery.js.map