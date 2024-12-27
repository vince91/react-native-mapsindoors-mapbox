"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPEntityInfo_1 = require("./MPEntityInfo");
class MPBuildingInfo extends MPEntityInfo_1.MPEntityInfo {
    static create(object) {
        return new MPBuildingInfo(object === null || object === void 0 ? void 0 : object.name, object === null || object === void 0 ? void 0 : object.aliases, object === null || object === void 0 ? void 0 : object.fields, object === null || object === void 0 ? void 0 : object.language);
    }
}
exports.default = MPBuildingInfo;
//# sourceMappingURL=MPBuildingInfo.js.map