"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MPCollection_1 = require("./MPCollection");
const MPVenue_1 = require("./MPVenue");
class MPVenueCollection extends MPCollection_1.default {
    constructor(venues) {
        super();
        this.map = new Map(venues.map((venue) => [venue.id, venue]));
        this.adminIdMap = new Map(venues.map((venue) => [venue.administrativeId.toLowerCase(), venue]));
    }
    getVenueByAdminId(id) {
        return this.adminIdMap.get(id.toLowerCase());
    }
    static create(object) {
        let venues = object === null || object === void 0 ? void 0 : object.map((venue) => MPVenue_1.default.create(venue));
        return new MPVenueCollection(venues);
    }
}
exports.default = MPVenueCollection;
//# sourceMappingURL=MPVenueCollection.js.map