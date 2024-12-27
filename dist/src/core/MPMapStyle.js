"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPMapStyle {
    constructor(folder, displayName) {
        this.folder = folder;
        this.displayName = displayName;
    }
    static create(object) {
        return new MPMapStyle(object === null || object === void 0 ? void 0 : object.folder, object === null || object === void 0 ? void 0 : object.displayName);
    }
}
exports.default = MPMapStyle;
//# sourceMappingURL=MPMapStyle.js.map