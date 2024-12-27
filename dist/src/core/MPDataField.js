"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPDataField {
    constructor(value, text, type) {
        this.value = value;
        this.text = text;
        this.type = type;
    }
    ;
    static create(object) {
        return new MPDataField(object === null || object === void 0 ? void 0 : object.value, object === null || object === void 0 ? void 0 : object.text, object === null || object === void 0 ? void 0 : object.type);
    }
}
exports.default = MPDataField;
//# sourceMappingURL=MPDataField.js.map