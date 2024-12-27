"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const MPEntityInfo_1 = require("./MPEntityInfo");
const MPLocationSettings_1 = require("./MPLocationSettings");
class MPPropertyData extends MPEntityInfo_1.MPEntityInfo {
    constructor(name, aliases, fields, categories, floor, floorName, building, venue, type, description, externalId, activeFrom, activeTo, contact, imageUrl, locationType, bookable, anchor, locationSettings) {
        super(name, aliases, fields, undefined);
        this.categories = categories;
        this.floor = floor;
        this.floorName = floorName;
        this.building = building;
        this.venue = venue;
        this.type = type;
        this.description = description;
        this.externalId = externalId;
        this.activeFrom = activeFrom;
        this.activeTo = activeTo;
        this.contact = contact;
        this.imageUrl = imageUrl;
        this.locationType = locationType;
        this.bookable = bookable;
        this.anchor = anchor;
        this.locationSettings = locationSettings;
    }
    static create(object, id) {
        var floor;
        if (react_native_1.Platform.OS === 'ios') {
            floor = object === null || object === void 0 ? void 0 : object.floor;
        }
        else {
            floor = (object === null || object === void 0 ? void 0 : object.floor) ? parseInt(object === null || object === void 0 ? void 0 : object.floor) : undefined;
        }
        return new MPPropertyData(object === null || object === void 0 ? void 0 : object.name, object === null || object === void 0 ? void 0 : object.aliases, object === null || object === void 0 ? void 0 : object.fields, object === null || object === void 0 ? void 0 : object.categories, floor, object === null || object === void 0 ? void 0 : object.floorName, object === null || object === void 0 ? void 0 : object.building, object === null || object === void 0 ? void 0 : object.venue, object === null || object === void 0 ? void 0 : object.type, object === null || object === void 0 ? void 0 : object.description, object === null || object === void 0 ? void 0 : object.externalId, object === null || object === void 0 ? void 0 : object.activeFrom, object === null || object === void 0 ? void 0 : object.activeTo, object === null || object === void 0 ? void 0 : object.contact, object === null || object === void 0 ? void 0 : object.imageURL, object === null || object === void 0 ? void 0 : object.locationType, object === null || object === void 0 ? void 0 : object.bookable, index_1.MPPoint.create(object === null || object === void 0 ? void 0 : object.anchor), (object === null || object === void 0 ? void 0 : object.locationSettings) && id ? MPLocationSettings_1.default.create(id, object === null || object === void 0 ? void 0 : object.locationSettings) : undefined);
    }
}
exports.default = MPPropertyData;
//# sourceMappingURL=MPPropertyData.js.map