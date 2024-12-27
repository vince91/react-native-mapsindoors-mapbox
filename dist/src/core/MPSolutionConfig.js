"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const MPLocationSettings_1 = require("./MPLocationSettings");
const MPUtils_1 = require("./MPUtils");
class MPSolutionConfig {
    constructor(id, settings3D, locationSettings, _enableClustering, _mpCollisionHandling, _isNewSelection) {
        this.id = id;
        this.settings3D = settings3D;
        this.locationSettings = locationSettings;
        this._enableClustering = _enableClustering;
        this._mpCollisionHandling = _mpCollisionHandling;
        this._isNewSelection = _isNewSelection;
    }
    static create(object) {
        return new MPSolutionConfig(object === null || object === void 0 ? void 0 : object.id, index_1.MPSettings3D.create(object === null || object === void 0 ? void 0 : object.settings3D), MPLocationSettings_1.default.create("solution", object === null || object === void 0 ? void 0 : object.locationSettings), object === null || object === void 0 ? void 0 : object.enableClustering, object === null || object === void 0 ? void 0 : object.collisionHandling, object === null || object === void 0 ? void 0 : object.isNewSelection);
    }
    set collisionHandling(collisionHandling) {
        this._mpCollisionHandling = collisionHandling;
        MPUtils_1.default.setCollisionHandling(collisionHandling);
    }
    get collisionHandling() {
        return this._mpCollisionHandling ? this._mpCollisionHandling : index_1.MPCollisionHandling.allowOverlap;
    }
    set enableClustering(enable) {
        this._enableClustering = enable;
        MPUtils_1.default.setEnableClustering(enable);
    }
    get enableClustering() {
        return this._enableClustering ? this._enableClustering : true;
    }
    set isNewSelection(enable) {
        this._isNewSelection = enable;
        MPUtils_1.default.setNewSelection(enable);
    }
    get isNewSelection() {
        return this._isNewSelection ? this._isNewSelection : true;
    }
    get selectable() {
        return this.locationSettings.selectable;
    }
    set selectable(selectable) {
        this.locationSettings.selectable = selectable;
    }
}
exports.default = MPSolutionConfig;
//# sourceMappingURL=MPSolutionConfig.js.map