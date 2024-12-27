"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPLocationSettings_1 = require("./MPLocationSettings");
class MPPOIType {
    constructor(name, translatedName, locationSettings) {
        this.name = name;
        this.translatedName = translatedName;
        this.locationSettings = locationSettings;
    }
    static create(object) {
        return new MPPOIType(object.name, object.translatedName, object.locationSettings ? MPLocationSettings_1.default.create(object.name, object.locationSettings) : undefined);
    }
    set selectable(selectable) {
        if (this.locationSettings) {
            this.locationSettings.selectable = selectable;
        }
        else {
            this.locationSettings = MPLocationSettings_1.default.create(this.name, { selectable });
            this.locationSettings.selectable = selectable;
        }
    }
    get selectable() {
        var _a, _b;
        return (_b = (_a = this.locationSettings) === null || _a === void 0 ? void 0 : _a.selectable) !== null && _b !== void 0 ? _b : null;
    }
}
exports.default = MPPOIType;
//# sourceMappingURL=MPPOIType.js.map