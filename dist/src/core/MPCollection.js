"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPCollection {
    constructor() { }
    getAll() {
        return Array.from(this.map.values());
    }
    getById(id) {
        return this.map.get(id);
    }
    get size() {
        return this.map.size;
    }
}
exports.default = MPCollection;
//# sourceMappingURL=MPCollection.js.map