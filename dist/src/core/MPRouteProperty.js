"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPRouteProperty {
    constructor(value, text, timeZone) {
        this.value = value;
        this.text = text;
        this.timeZone = timeZone;
    }
    static create(object) {
        return new MPRouteProperty(object === null || object === void 0 ? void 0 : object.value, object === null || object === void 0 ? void 0 : object.text, object === null || object === void 0 ? void 0 : object.time_zone);
    }
    toJSON() {
        return {
            value: this.value,
            text: this.text,
            time_zone: this.timeZone,
        };
    }
}
exports.default = MPRouteProperty;
//# sourceMappingURL=MPRouteProperty.js.map