"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPUserRole {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static create(object) {
        return new MPUserRole(object === null || object === void 0 ? void 0 : object.id, object === null || object === void 0 ? void 0 : object.name);
    }
}
exports.default = MPUserRole;
//# sourceMappingURL=MPUserRole.js.map