"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPUtils_1 = require("./MPUtils");
class MPLocationSettings {
    constructor(id, _selectable) {
        this.id = id;
        this._selectable = _selectable;
    }
    static create(id, object) {
        return new MPLocationSettings(id, object === null || object === void 0 ? void 0 : object.selectable);
    }
    set selectable(selectable) {
        this._selectable = selectable;
        MPUtils_1.default.setSelectable(this.id, selectable);
    }
    get selectable() {
        return this._selectable;
    }
}
exports.default = MPLocationSettings;
//# sourceMappingURL=MPLocationSettings.js.map