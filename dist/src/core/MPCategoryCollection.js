"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPCategory_1 = require("./MPCategory");
const MPCollection_1 = require("./MPCollection");
class MPCategoryCollection extends MPCollection_1.default {
    constructor(category) {
        super();
        this.map = new Map(category.map((category) => [category.key, category]));
    }
    getValue(key) {
        let category = this.getById(key);
        return category === null || category === void 0 ? void 0 : category.value;
    }
    getFields(key) {
        let category = this.getById(key);
        return category === null || category === void 0 ? void 0 : category.fields;
    }
    static create(object) {
        let category = object === null || object === void 0 ? void 0 : object.map((venue) => MPCategory_1.default.create(venue));
        return new MPCategoryCollection(category);
    }
}
exports.default = MPCategoryCollection;
//# sourceMappingURL=MPCategoryCollection.js.map