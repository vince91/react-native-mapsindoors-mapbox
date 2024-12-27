"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPCollection_1 = require("./MPCollection");
const index_1 = require("../../index");
class MPUserRoleCollection extends MPCollection_1.default {
    constructor(userroles) {
        super();
        this.map = new Map(userroles.map((role) => [role.id, role]));
    }
    static create(object) {
        let userroles = object === null || object === void 0 ? void 0 : object.map((venue) => index_1.MPUserRole.create(venue));
        return new MPUserRoleCollection(userroles);
    }
}
exports.default = MPUserRoleCollection;
//# sourceMappingURL=MPUserRoleCollection.js.map