"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MPError {
    constructor(code, message, status, tag) {
        this.code = code;
        this.message = message;
        this.status = status;
        this.tag = tag;
    }
    static create(object) {
        return new MPError(object.code, object.message, object === null || object === void 0 ? void 0 : object.status, object === null || object === void 0 ? void 0 : object.tag);
    }
    static parse(error) {
        return MPError.create(JSON.parse(error.message));
    }
}
MPError.networkError = 10;
MPError.unknownError = 20;
MPError.sdkNotInitialized = 22;
MPError.invalidApiKey = 100;
exports.default = MPError;
//# sourceMappingURL=MPError.js.map