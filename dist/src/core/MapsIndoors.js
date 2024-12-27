"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const MPBuildingCollection_1 = require("./MPBuildingCollection");
const MPVenueCollection_1 = require("./MPVenueCollection");
const { MapsIndoorsModule } = react_native_1.NativeModules;
class MapsIndoors {
    constructor() { }
    ;
    static async load(apiKey, venues = null) {
        return MapsIndoorsModule.loadMapsIndoors(apiKey, venues).catch((err) => Promise.reject(index_1.MPError.parse(err)));
    }
    static async getDefaultVenue() {
        return MapsIndoorsModule.getDefaultVenue().then((venueString) => {
            let venue = index_1.MPVenue.create(JSON.parse(venueString));
            return Promise.resolve(venue);
        }).catch((err) => Promise.reject(index_1.MPError.parse(err)));
    }
    static async getVenues() {
        return MapsIndoorsModule.getVenues()
            .catch((err) => { return Promise.reject(index_1.MPError.create(index_1.MPError.parse(err))); })
            .then((venueString) => {
            const venues = MPVenueCollection_1.default.create(JSON.parse(venueString));
            return Promise.resolve(venues);
        });
    }
    static async getBuildings() {
        return MapsIndoorsModule.getBuildings()
            .catch((err) => Promise.reject(index_1.MPError.parse(err)))
            .then((buildingString) => {
            const buildings = MPBuildingCollection_1.default.create(JSON.parse(buildingString));
            return Promise.resolve(buildings);
        });
    }
    static async getCategories() {
        return MapsIndoorsModule.getCategories()
            .catch((err) => Promise.reject(index_1.MPError.parse(err)))
            .then((categoryString) => {
            const categories = index_1.MPCategoryCollection.create(JSON.parse(categoryString));
            return Promise.resolve(categories);
        });
    }
    static async getLocations() {
        return MapsIndoorsModule.getLocations()
            .catch((err) => { Promise.reject(index_1.MPError.parse(err)); })
            .then((locationsString) => {
            const locations = JSON.parse(locationsString).map((location) => index_1.MPLocation.create(location));
            return Promise.resolve(locations);
        });
    }
    static async disableEventLogging(disable) {
        return MapsIndoorsModule.disableEventLogging(disable).then(() => Promise.resolve());
    }
    static async getApiKey() {
        return MapsIndoorsModule.getApiKey();
    }
    static async getAvailableLanguages() {
        return MapsIndoorsModule.getAvailableLanguages()
            .catch((err) => Promise.reject(index_1.MPError.parse(err)));
    }
    static async getDefaultLanguage() {
        return MapsIndoorsModule.getDefaultLanguage();
    }
    static async getLanguage() {
        return MapsIndoorsModule.getLanguage();
    }
    static async getLocationById(id) {
        return MapsIndoorsModule.getLocationById(id).then((locationString) => {
            if (locationString) {
                const location = index_1.MPLocation.create(JSON.parse(locationString));
                return Promise.resolve(location);
            }
            else {
                return Promise.resolve(undefined);
            }
        });
    }
    static async getLocationsByExternalIds(externalIds) {
        return MapsIndoorsModule.getLocationsByExternalIds(externalIds).then((locationsString) => {
            const locations = JSON.parse(locationsString).map((location) => index_1.MPLocation.create(location));
            return Promise.resolve(locations);
        });
    }
    static async getMapStyles() {
        return MapsIndoorsModule.getMapStyles().then((mapStylesString) => {
            const mapStyles = JSON.parse(mapStylesString).map((mapStyle) => index_1.MPMapStyle.create(mapStyle));
            return Promise.resolve(mapStyles);
        });
    }
    static async getSolution() {
        return MapsIndoorsModule.getSolution().then((solutionString) => {
            const solution = index_1.MPSolution.create(JSON.parse(solutionString));
            return Promise.resolve(solution);
        });
    }
    static async getLocationsAsync(query, filter) {
        return MapsIndoorsModule.getLocationsAsync(JSON.stringify(query), JSON.stringify(filter))
            .then((locationsString) => {
            const locations = JSON.parse(locationsString).map((location) => index_1.MPLocation.create(location));
            return Promise.resolve(locations);
        }).catch((err) => Promise.reject(index_1.MPError.parse(err)));
    }
    static async getDisplayRuleByLocation(location) {
        return MapsIndoorsModule.locationDisplayRuleExists(location.id).then((exists) => {
            return Promise.resolve(exists ? index_1.MPDisplayRule.create({ "id": location.id }) : undefined);
        });
    }
    static async getDisplayRuleByName(name) {
        return MapsIndoorsModule.displayRuleNameExists(name).then((exists) => {
            return Promise.resolve(exists ? index_1.MPDisplayRule.create({ "id": name }) : undefined);
        });
    }
    static async getMainDisplayRule() {
        return Promise.resolve(index_1.MPDisplayRule.create({ "id": "main" }));
    }
    static async getSolutionDisplayRule(solutionDisplayRule) {
        return Promise.resolve(index_1.MPDisplayRule.create({ "id": solutionDisplayRule }));
    }
    static async getDefaultDisplayRule() {
        return Promise.resolve(index_1.MPDisplayRule.create({ "id": "default" }));
    }
    static async setPositionProvider(positonProvider) {
        if (positonProvider) {
            const positionUpdateListener = (position) => {
                if (react_native_1.Platform.OS === 'ios') {
                    let obj = {
                        coordinate: [position.point.longitude, position.point.latitude, position.floorIndex],
                        floorIndex: position.floorIndex,
                        bearing: position.bearing,
                        accuracy: position.accuracy,
                        providerName: position.positionProvider
                    };
                    MapsIndoorsModule.onPositionUpdate(JSON.stringify(obj));
                }
                else {
                    MapsIndoorsModule.onPositionUpdate(JSON.stringify(position));
                }
            };
            positonProvider.addOnPositionUpdateListener(positionUpdateListener);
            return MapsIndoorsModule.setPositionProvider(positonProvider.name).then(() => { });
        }
        else {
            return MapsIndoorsModule.removePositionProvider().then(() => { });
        }
    }
    static async getUserRoles() {
        return MapsIndoorsModule.getUserRoles().then((userRolesString) => {
            const userRoles = index_1.MPUserRoleCollection.create(JSON.parse(userRolesString));
            return Promise.resolve(userRoles);
        }).catch((err) => Promise.reject(index_1.MPError.create(JSON.parse(err))));
    }
    static async checkOfflineDataAvailability() {
        return MapsIndoorsModule.checkOfflineDataAvailability();
    }
    static async destroy() {
        return MapsIndoorsModule.destroy().then(() => { });
    }
    static async isApiKeyValid() {
        return MapsIndoorsModule.isApiKeyValid();
    }
    static async isInitialized() {
        return MapsIndoorsModule.isInitialized();
    }
    static async isReady() {
        return MapsIndoorsModule.isReady();
    }
    static async setLanguage(language) {
        return MapsIndoorsModule.setLanguage(language);
    }
    static async synchronizeContent() {
        return MapsIndoorsModule.synchronizeContent().catch((err) => {
            return Promise.reject(index_1.MPError.parse(err));
        });
    }
    static async applyUserRoles(userRoles) {
        return MapsIndoorsModule.applyUserRoles(JSON.stringify(userRoles));
    }
    static async getAppliedUserRoles() {
        return MapsIndoorsModule.getAppliedUserRoles().then((userRolesString) => {
            const userRoles = JSON.parse(userRolesString).map((userRole) => index_1.MPUserRole.create(userRole));
            return Promise.resolve(userRoles);
        });
    }
    static async addVenuesToSync(venues) {
        return MapsIndoorsModule.addVenuesToSync(venues);
    }
    static async removeVenuesToSync(venues) {
        return MapsIndoorsModule.removeVenuesToSync(venues);
    }
    static async getSyncedVenues() {
        return MapsIndoorsModule.getSyncedVenues().then((venues) => {
            if (venues === null || venues === undefined) {
                return [];
            }
            else {
                return venues;
            }
        });
    }
}
exports.default = MapsIndoors;
//# sourceMappingURL=MapsIndoors.js.map