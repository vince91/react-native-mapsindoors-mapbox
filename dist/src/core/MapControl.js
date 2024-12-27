"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const EventNames_1 = require("./EventNames");
const { MapControlModule } = react_native_1.NativeModules;
class MapControl {
    constructor() {
        this.onCameraEventSubs = new Map;
        this.onFloorUpdateSubs = new Map;
        this.onLiveUpdateSubs = new Map;
    }
    static async create(config, nativeEventEmitter) {
        return MapControlModule.initMapControl(config).then(() => {
            const mapControl = new MapControl();
            mapControl.eventEmitter = new nativeEventEmitter(MapControlModule);
            if (config.floorSelector !== undefined) {
                mapControl.setFloorSelector(config.floorSelector);
            }
            return Promise.resolve(mapControl);
        }).catch((err) => Promise.reject(index_1.MPError.parse(err)));
    }
    onFloorSelectionChanged(newFloor) {
        MapControlModule.onFloorSelectionChanged(JSON.stringify(newFloor));
    }
    async selectVenue(venue, moveCamera) {
        return MapControlModule.selectVenue(JSON.stringify(venue), moveCamera).then(() => { });
    }
    async getCurrentVenue() {
        return MapControlModule.getCurrentVenue().then((venue) => venue ? Promise.resolve(index_1.MPVenue.create(JSON.parse(venue))) : undefined);
    }
    async getCurrentBuilding() {
        return MapControlModule.getCurrentBuilding().then((building) => building ? Promise.resolve(index_1.MPBuilding.create(JSON.parse(building))) : undefined);
    }
    async selectBuilding(building, moveCamera) {
        return MapControlModule.selectBuilding(JSON.stringify(building), moveCamera);
    }
    async selectLocation(locationOrId, behavior) {
        if (locationOrId instanceof index_1.MPLocation) {
            return Promise.resolve(MapControlModule.selectLocation(JSON.stringify(locationOrId), JSON.stringify(behavior)));
        }
        else {
            return Promise.resolve(MapControlModule.selectLocationWithId(locationOrId, JSON.stringify(behavior)));
        }
    }
    async clearFilter() {
        return Promise.resolve(MapControlModule.clearFilter());
    }
    async setFilter(locationOrFilter, filterBehavior) {
        if (Array.isArray(locationOrFilter)) {
            const locationIds = new Array();
            locationOrFilter.forEach((location => {
                locationIds.push(location.id);
            }));
            return Promise.resolve(MapControlModule.setFilterWithLocations(JSON.stringify(locationIds), JSON.stringify(filterBehavior)));
        }
        else {
            return Promise.resolve(MapControlModule.setFilter(JSON.stringify(locationOrFilter), JSON.stringify(filterBehavior)));
        }
    }
    async setHighlight(locations, highlightBehavior) {
        const locationIds = new Array();
        locations.forEach((location => {
            locationIds.push(location.id);
        }));
        return Promise.resolve(MapControlModule.setHighlight(JSON.stringify(locationIds), JSON.stringify(highlightBehavior)));
    }
    async clearHighlight() {
        return MapControlModule.clearHighlight();
    }
    async goTo(entity) {
        return MapControlModule.goTo(JSON.stringify(entity), entity.type).then(() => { });
    }
    async setMapPadding(start, top, end, bottom) {
        await MapControlModule.setMapPadding(start, top, end, bottom);
    }
    async getMapViewPaddingStart() {
        return MapControlModule.getMapViewPaddingStart();
    }
    async getMapViewPaddingTop() {
        return MapControlModule.getMapViewPaddingTop();
    }
    async getMapViewPaddingEnd() {
        return MapControlModule.getMapViewPaddingEnd();
    }
    async getMapViewPaddingBottom() {
        return MapControlModule.getMapViewPaddingBottom();
    }
    async setMapStyle(style) {
        await MapControlModule.setMapStyle(JSON.stringify(style));
    }
    async getMapStyle() {
        let mapStyleString = await MapControlModule.getMapStyle();
        return Promise.resolve(mapStyleString ? index_1.MPMapStyle.create(JSON.parse(mapStyleString)) : undefined);
    }
    async showInfoWindowOnClickedLocation(show) {
        await MapControlModule.showInfoWindowOnClickedLocation(show);
    }
    async deSelectLocation() {
        await MapControlModule.deSelectLocation();
    }
    async getCurrentBuildingFloor() {
        let floorString = await MapControlModule.getCurrentBuildingFloor();
        return Promise.resolve(floorString ? index_1.MPFloor.create(JSON.parse(floorString)) : undefined);
    }
    async getCurrentFloorIndex() {
        return MapControlModule.getCurrentFloorIndex();
    }
    async getCurrentMapsIndoorsZoom() {
        return MapControlModule.getCurrentMapsIndoorsZoom();
    }
    async selectFloor(floorIndex) {
        await MapControlModule.selectFloor(floorIndex);
    }
    async isFloorSelectorHidden() {
        return MapControlModule.isFloorSelectorHidden();
    }
    async hideFloorSelector(hide) {
        await MapControlModule.hideFloorSelector(hide);
    }
    async setFloorSelector(floorSelector) {
        if (floorSelector) {
            floorSelector.setOnFloorSelectionChangedListener(this.onFloorSelectionChanged);
            await this.setupFloorSelector(floorSelector);
        }
        else {
            await this.teardownFloorSelector();
        }
    }
    async setupFloorSelector(floorSelector) {
        return MapControlModule.setFloorSelector(true, floorSelector.isAutoFloorChangeEnabled()).then(() => {
            var _a;
            const sub = (_a = this.eventEmitter) === null || _a === void 0 ? void 0 : _a.addListener(EventNames_1.EventNames.floorSelector, event => {
                const fs = floorSelector;
                const method = event.method;
                switch (method) {
                    case "setList":
                        {
                            fs.setFloors(event.list ?
                                JSON.parse(event.list).map((venue) => index_1.MPFloor.create(venue)) :
                                undefined);
                        }
                        break;
                    case "show":
                        {
                            fs.show(event.show, event.animated);
                        }
                        break;
                    case "setSelectedFloor":
                        {
                            fs.setSelectedFloor(index_1.MPFloor.create(JSON.parse(event.floor)));
                        }
                        break;
                    case "setSelectedFloorByFloorIndex":
                        {
                            fs.setSelectedFloorByFloorIndex(event.floorIndex);
                        }
                        break;
                    case "zoomLevelChanged":
                        {
                            fs.zoomLevelChanged(event.zoom);
                        }
                        break;
                    case "setUserPositionFloor":
                        {
                            fs.setUserPositionFloor(event.floor);
                        }
                        break;
                }
            });
            this.floorSelector = sub;
            return Promise.resolve();
        });
    }
    async teardownFloorSelector() {
        return MapControlModule.setFloorSelector(false).then(() => {
            var _a;
            (_a = this.floorSelector) === null || _a === void 0 ? void 0 : _a.remove();
            this.floorSelector = undefined;
            return Promise.resolve();
        });
    }
    async showUserPosition(show) {
        return MapControlModule.showUserPosition(show).then(() => Promise.resolve());
    }
    async isUserPositionShown() {
        return MapControlModule.isUserPositionShown();
    }
    async enableLiveData(domainType, listener) {
        await MapControlModule.enableLiveData(domainType, listener !== undefined);
        if (listener) {
            this.addLiveDataListener(domainType, listener);
        }
    }
    addLiveDataListener(domainType, listener) {
        var _a, _b;
        (_a = this.onLiveUpdateSubs.get(domainType)) === null || _a === void 0 ? void 0 : _a.remove();
        const sub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onLiveLocationUpdate, event => {
            const location = index_1.MPLocation.create(JSON.parse(event.location));
            listener(location);
        });
        this.onLiveUpdateSubs.set(domainType, sub);
    }
    async disableLiveData(domainType) {
        await MapControlModule.disableLiveData(domainType);
        this.removeLiveDataListener(domainType);
    }
    removeLiveDataListener(domainType) {
        var _a;
        (_a = this.onLiveUpdateSubs.get(domainType)) === null || _a === void 0 ? void 0 : _a.remove();
        this.onLiveUpdateSubs.delete(domainType);
    }
    async animateCamera(update, duration) {
        if (duration === undefined) {
            duration = -1;
        }
        await MapControlModule.animateCamera(JSON.stringify(update), duration);
    }
    async moveCamera(update) {
        await MapControlModule.moveCamera(JSON.stringify(update));
    }
    async getCurrentCameraPosition() {
        let positionString = await MapControlModule.getCurrentCameraPosition();
        return Promise.resolve(index_1.MPCameraPosition.create(JSON.parse(positionString)));
    }
    setOnMapClickListener(listener, consumeEvent) {
        var _a, _b;
        MapControlModule.setOnMapClickListener(listener !== undefined, consumeEvent ? true : false);
        (_a = this.onMapClickSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onMapClickSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onMapClick, event => {
                const point = index_1.MPPoint.create(JSON.parse(event.point));
                if (event.locations != null) {
                    const locs = JSON.parse(event.locations).map((loc) => index_1.MPLocation.create(loc));
                    listener(point, locs);
                }
                else {
                    listener(point, undefined);
                }
            });
        }
    }
    setOnLocationSelectedListener(listener, consumeEvent) {
        var _a, _b;
        MapControlModule.setOnLocationSelectedListener(listener !== undefined, consumeEvent !== undefined && consumeEvent);
        (_a = this.onLocationSelectedSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onLocationSelectedSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onLocationSelected, event => {
                const loc = index_1.MPLocation.create(JSON.parse(event.location));
                listener(loc);
            });
        }
    }
    setOnCurrentVenueChangedListener(listener) {
        var _a, _b;
        MapControlModule.setOnCurrentVenueChangedListener(listener !== undefined);
        (_a = this.onCurrentVenueChangedSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onCurrentVenueChangedSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onVenueFoundAtCameraTarget, event => {
                const venueString = JSON.parse(event.venue);
                if (venueString != undefined) {
                    listener(index_1.MPVenue.create(venueString));
                }
                else {
                    listener();
                }
            });
        }
    }
    setOnCurrentBuildingChangedListener(listener) {
        var _a, _b;
        MapControlModule.setOnCurrentBuildingChangedListener(listener !== undefined);
        (_a = this.onCurrentBuildingChangedSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onCurrentBuildingChangedSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onBuildingFoundAtCameraTarget, event => {
                const buildingString = JSON.parse(event.building);
                if (buildingString != undefined) {
                    listener(index_1.MPBuilding.create(buildingString));
                }
                else {
                    listener();
                }
            });
        }
    }
    setOnMarkerClickListener(listener, consumeEvent) {
        var _a, _b;
        MapControlModule.setOnMarkerClickListener(listener !== undefined, consumeEvent !== undefined && consumeEvent);
        (_a = this.onMarkerClickSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onMarkerClickSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onMarkerClick, event => {
                const locId = event.locationId;
                listener(locId);
            });
        }
    }
    setOnMarkerInfoWindowClickListener(listener) {
        var _a, _b;
        MapControlModule.setOnMarkerInfoWindowClickListener(listener !== undefined);
        (_a = this.onMarkerInfoWindowClickSub) === null || _a === void 0 ? void 0 : _a.remove();
        if (listener !== undefined) {
            this.onMarkerInfoWindowClickSub = (_b = this.eventEmitter) === null || _b === void 0 ? void 0 : _b.addListener(EventNames_1.EventNames.onInfoWindowClick, event => {
                const locId = event.locationId;
                listener(locId);
            });
        }
    }
    addOnCameraEventListener(listener) {
        var _a;
        if (this.onCameraEventSubs.size == 0) {
            MapControlModule.setMPCameraEventListener(true);
        }
        const sub = (_a = this.eventEmitter) === null || _a === void 0 ? void 0 : _a.addListener(EventNames_1.EventNames.cameraEvent, event => {
            const cameraEvent = event.event;
            listener(cameraEvent);
        });
        this.onCameraEventSubs.set(listener, sub);
    }
    removeOnCameraEventListener(listener) {
        var _a;
        (_a = this.onCameraEventSubs.get(listener)) === null || _a === void 0 ? void 0 : _a.remove();
        this.onCameraEventSubs.delete(listener);
        if (this.onCameraEventSubs.size == 0) {
            MapControlModule.setMPCameraEventListener(false);
        }
    }
    addOnFloorUpdateListener(listener) {
        var _a;
        if (this.onCameraEventSubs.size == 0) {
            MapControlModule.setOnFloorUpdateListener(true);
        }
        const sub = (_a = this.eventEmitter) === null || _a === void 0 ? void 0 : _a.addListener(EventNames_1.EventNames.onFloorUpdate, event => {
            const floor = event.floorIndex;
            listener(floor);
        });
        this.onFloorUpdateSubs.set(listener, sub);
    }
    removeOnFloorUpdateListener(listener) {
        var _a;
        (_a = this.onFloorUpdateSubs.get(listener)) === null || _a === void 0 ? void 0 : _a.remove();
        this.onFloorUpdateSubs.delete(listener);
        if (this.onCameraEventSubs.size == 0) {
            MapControlModule.setOnFloorUpdateListener(false);
        }
    }
    setLabelOptions(textSize, color, showHalo) {
        if (showHalo === undefined) {
            showHalo = false;
        }
        if (textSize == undefined) {
            textSize = -1;
        }
        return MapControlModule.setLabelOptions(textSize, color, showHalo).then(() => Promise.resolve());
    }
    setBuildingSelectionMode(selectionMode) {
        return MapControlModule.setBuildingSelectionMode(selectionMode);
    }
    getBuildingSelectionMode() {
        return MapControlModule.getBuildingSelectionMode();
    }
    setFloorSelectionMode(selectionMode) {
        return MapControlModule.setFloorSelectionMode(selectionMode);
    }
    getFloorSelectionMode() {
        return MapControlModule.getFloorSelectionMode();
    }
    setHiddenFeatures(features) {
        return MapControlModule.setHiddenFeatures(JSON.stringify(features));
    }
    getHiddenFeatures() {
        return MapControlModule.getHiddenFeatures().then((features) => JSON.parse(features));
    }
}
exports.default = MapControl;
//# sourceMappingURL=MapControl.js.map