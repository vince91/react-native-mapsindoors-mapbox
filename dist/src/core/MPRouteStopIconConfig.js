"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPRouteStopIconConfig {
    constructor(numberd, label, color) {
        this.numbered = numberd;
        this.label = label;
        this.color = color;
    }
    getImage() {
        return new URL(JSON.stringify(this));
    }
    static create(obj) {
        return new MPRouteStopIconConfig(obj.numbered, obj.label, obj.color);
    }
}
exports.default = MPRouteStopIconConfig;
//# sourceMappingURL=MPRouteStopIconConfig.js.map