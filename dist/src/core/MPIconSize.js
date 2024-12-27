"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPIconSize {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    static create(object) {
        return new MPIconSize(object === null || object === void 0 ? void 0 : object.height, object === null || object === void 0 ? void 0 : object.width);
    }
}
exports.default = MPIconSize;
//# sourceMappingURL=MPIconSize.js.map