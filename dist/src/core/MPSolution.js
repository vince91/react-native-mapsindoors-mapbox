"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const MPPOIType_1 = require("./MPPOIType");
const MPUtils_1 = require("./MPUtils");
class MPSolution {
    constructor(id, name, solutionConfig, defaultLanguage, availableLanguages, modules, locationTemplates, customerId, mapClientUrl, types) {
        this.id = id;
        this.name = name;
        this.solutionConfig = solutionConfig;
        this.defaultLanguage = defaultLanguage;
        this.availableLanguages = availableLanguages;
        this.modules = modules;
        this.locationTemplates = locationTemplates;
        this.customerId = customerId;
        this.mapClientUrl = mapClientUrl;
        this.types = types;
    }
    static create(object) {
        var _a;
        return new MPSolution(object === null || object === void 0 ? void 0 : object.id, object === null || object === void 0 ? void 0 : object.name, index_1.MPSolutionConfig.create(object === null || object === void 0 ? void 0 : object.solutionConfig), object === null || object === void 0 ? void 0 : object.defaultLanguage, object === null || object === void 0 ? void 0 : object.availableLanguages, object === null || object === void 0 ? void 0 : object.modules, object === null || object === void 0 ? void 0 : object.locationTemplates, object === null || object === void 0 ? void 0 : object.customerId, object === null || object === void 0 ? void 0 : object.mapClientUrl, (_a = object === null || object === void 0 ? void 0 : object.types) === null || _a === void 0 ? void 0 : _a.map((type) => MPPOIType_1.default.create(type)));
    }
    hasLanguage(language) {
        return language ? this.availableLanguages.includes(language) : false;
    }
    isZoom22Enabled() {
        return this.modules.includes("z22");
    }
    is3DWallsEnabled() {
        return this.modules.includes("3dwalls");
    }
    is3DExtrusionsEnabled() {
        return this.modules.includes("3dextrusions");
    }
    async parseMapClient(venueId, locationId) {
        return MPUtils_1.default.parseMapClientUrl(venueId, locationId);
    }
}
exports.default = MPSolution;
//# sourceMappingURL=MPSolution.js.map