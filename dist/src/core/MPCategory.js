"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
class MPCategory {
    constructor(key, value, fields) {
        this.key = key;
        this.value = value;
        this.fields = fields;
    }
    static create(object) {
        let fields;
        if ((object === null || object === void 0 ? void 0 : object.fields) !== undefined) {
            fields = new Map();
            Object.keys(object === null || object === void 0 ? void 0 : object.fields).forEach(key => {
                fields.set(key, index_1.MPDataField.create(object === null || object === void 0 ? void 0 : object.fields.get(key)));
            });
        }
        return new MPCategory(object === null || object === void 0 ? void 0 : object.key, object === null || object === void 0 ? void 0 : object.value, fields);
    }
}
exports.default = MPCategory;
//# sourceMappingURL=MPCategory.js.map