"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const index_1 = require("../../index");
const { DisplayRule } = react_native_1.NativeModules;
class MPDisplayRule {
    constructor(id) {
        this.id = id;
    }
    static create(object) {
        const mpDisplayRule = new MPDisplayRule(object === null || object === void 0 ? void 0 : object.id);
        return mpDisplayRule;
    }
    async isVisible() {
        return DisplayRule.isVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setVisible(visible) {
        return DisplayRule.setVisible(this.id, JSON.stringify(visible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isIconVisible() {
        return DisplayRule.isIconVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setIconVisible(iconVisible) {
        return DisplayRule.setIconVisible(this.id, JSON.stringify(iconVisible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isPolygonVisible() {
        return DisplayRule.isPolygonVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonVisible(polygonVisible) {
        return DisplayRule.setPolygonVisible(this.id, JSON.stringify(polygonVisible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isLabelVisible() {
        return DisplayRule.isLabelVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelVisible(labelVisible) {
        return DisplayRule.setLabelVisible(this.id, JSON.stringify(labelVisible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isModel2DVisible() {
        return DisplayRule.isModel2DVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DVisible(model2DVisible) {
        return DisplayRule.setModel2DVisible(this.id, JSON.stringify(model2DVisible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isWallVisible() {
        return DisplayRule.isWallVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setWallVisible(wallVisible) {
        return DisplayRule.setWallVisible(this.id, JSON.stringify(wallVisible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isExtrusionVisible() {
        return DisplayRule.isExtrusionVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setExtrusionVisible(extrusionVisible) {
        return DisplayRule.setExtrusionVisible(this.id, JSON.stringify(extrusionVisible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getZoomFrom() {
        return DisplayRule.getZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setZoomFrom(zoomFrom) {
        if (zoomFrom == null) {
            zoomFrom = -1;
        }
        return DisplayRule.setZoomFrom(this.id, zoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getZoomTo() {
        return DisplayRule.getZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setZoomTo(zoomTo) {
        if (zoomTo == null) {
            zoomTo = -1;
        }
        return DisplayRule.setZoomTo(this.id, zoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getIconUrl() {
        return DisplayRule.getIconUrl(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setIcon(iconUrl) {
        return DisplayRule.setIcon(this.id, iconUrl).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getIconSize() {
        let iconSize = await DisplayRule.getIconSize(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
        return Promise.resolve(index_1.MPIconSize.create(JSON.parse(iconSize))).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setIconSize(iconSize) {
        return DisplayRule.setIconSize(this.id, JSON.stringify(iconSize)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabel() {
        return DisplayRule.getLabel(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabel(label) {
        return DisplayRule.setLabel(this.id, label).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelZoomFrom() {
        return DisplayRule.getLabelZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelZoomFrom(zoomFrom) {
        if (zoomFrom == null) {
            zoomFrom = -1;
        }
        return DisplayRule.setLabelZoomFrom(this.id, zoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelZoomTo() {
        return DisplayRule.getLabelZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelZoomTo(zoomTo) {
        if (zoomTo == null) {
            zoomTo = -1;
        }
        return DisplayRule.setLabelZoomTo(this.id, zoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelMaxWidth() {
        return DisplayRule.getLabelMaxWidth(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelMaxWidth(labelMaxWidth) {
        if (labelMaxWidth == null) {
            labelMaxWidth = -1;
        }
        return DisplayRule.setLabelMaxWidth(this.id, labelMaxWidth).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonZoomFrom() {
        return DisplayRule.getPolygonZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonZoomFrom(polygonZoomFrom) {
        if (polygonZoomFrom == null) {
            polygonZoomFrom = -1;
        }
        return DisplayRule.setPolygonZoomFrom(this.id, polygonZoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonZoomTo() {
        return DisplayRule.getPolygonZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonZoomTo(polygonZoomTo) {
        if (polygonZoomTo == null) {
            polygonZoomTo = -1;
        }
        return DisplayRule.setPolygonZoomFrom(this.id, polygonZoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonStrokeWidth() {
        return DisplayRule.getPolygonStrokeWidth(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonStrokeWidth(strokeWidth) {
        if (strokeWidth == null) {
            strokeWidth = -1;
        }
        return DisplayRule.setPolygonStrokeWidth(this.id, strokeWidth).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonStrokeColor() {
        return DisplayRule.getPolygonStrokeColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonStrokeColor(strokeColor) {
        return DisplayRule.setPolygonStrokeColor(this.id, strokeColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonStrokeOpacity() {
        return DisplayRule.getPolygonStrokeOpacity(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonStrokeOpacity(strokeOpacity) {
        if (strokeOpacity == null) {
            strokeOpacity = -1;
        }
        return DisplayRule.setPolygonStrokeOpacity(this.id, strokeOpacity).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonFillOpacity() {
        return DisplayRule.getPolygonFillOpacity(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonFillOpacity(fillOpacity) {
        if (fillOpacity == null) {
            fillOpacity = -1;
        }
        return DisplayRule.setPolygonFillOpacity(this.id, fillOpacity).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonFillColor() {
        return DisplayRule.getPolygonFillColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonFillColor(fillColor) {
        return DisplayRule.setPolygonFillColor(this.id, fillColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getWallColor() {
        return DisplayRule.getWallColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setWallColor(wallColor) {
        return DisplayRule.setWallColor(this.id, wallColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getWallHeight() {
        return DisplayRule.getWallHeight(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setWallHeight(wallHeight) {
        if (wallHeight == null) {
            wallHeight = -1;
        }
        return DisplayRule.setWallHeight(this.id, wallHeight).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getWallZoomFrom() {
        return DisplayRule.getWallZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setWallZoomFrom(wallZoomFrom) {
        if (wallZoomFrom == null) {
            wallZoomFrom = -1;
        }
        return DisplayRule.setWallZoomFrom(this.id, wallZoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getWallZoomTo() {
        return DisplayRule.getWallZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setWallZoomTo(wallZoomTo) {
        if (wallZoomTo == null) {
            wallZoomTo = -1;
        }
        return DisplayRule.setWallZoomTo(this.id, wallZoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getExtrusionColor() {
        return DisplayRule.getExtrusionColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setExtrusionColor(extrusionColor) {
        return DisplayRule.setExtrusionColor(this.id, extrusionColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getExtrusionHeight() {
        return DisplayRule.getExtrusionHeight(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setExtrusionHeight(extrusionHeight) {
        if (extrusionHeight == null) {
            extrusionHeight = -1;
        }
        return DisplayRule.setExtrusionHeight(this.id, extrusionHeight).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getExtrusionZoomFrom() {
        return DisplayRule.getExtrusionZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setExtrusionZoomFrom(extrusionZoomFrom) {
        if (extrusionZoomFrom == null) {
            extrusionZoomFrom = -1;
        }
        return DisplayRule.setExtrusionZoomFrom(this.id, extrusionZoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getExtrusionZoomTo() {
        return DisplayRule.getExtrusionZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setExtrusionZoomTo(extrusionZoomTo) {
        if (extrusionZoomTo == null) {
            extrusionZoomTo = -1;
        }
        return DisplayRule.setExtrusionZoomTo(this.id, extrusionZoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel2DZoomFrom() {
        return DisplayRule.getModel2DZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DZoomFrom(zoomFrom) {
        if (zoomFrom == null) {
            zoomFrom = -1;
        }
        return DisplayRule.setModel2DZoomFrom(this.id, zoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel2DZoomTo() {
        return DisplayRule.getModel2DZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DZoomTo(zoomTo) {
        if (zoomTo == null) {
            zoomTo = -1;
        }
        return DisplayRule.setModel2DZoomTo(this.id, zoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel2DModel() {
        return DisplayRule.getModel2DModel(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DModel(url) {
        return DisplayRule.setModel2DModel(this.id, url).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel2DWidthMeters() {
        return DisplayRule.getModel2DWidthMeters(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DWidthMeters(width) {
        if (width == null) {
            width = -1;
        }
        return DisplayRule.setModel2DWidthMeters(this.id, width).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel2DHeightMeters() {
        return DisplayRule.getModel2DHeightMeters(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DHeightMeters(height) {
        if (height == null) {
            height = -1;
        }
        return DisplayRule.setModel2DHeightMeters(this.id, height).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel2DBearing() {
        return DisplayRule.getModel2DBearing(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel2DBearing(bearing) {
        if (bearing == null) {
            bearing = -1;
        }
        return DisplayRule.setModel2DBearing(this.id, bearing).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getIconScale() {
        return DisplayRule.getIconScale(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setIconScale(iconScale) {
        if (iconScale == null) {
            iconScale = -1;
        }
        return DisplayRule.setIconScale(this.id, iconScale).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getIconPlacement() {
        return DisplayRule.getIconPlacement(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setIconPlacement(iconPlacement) {
        if (iconPlacement == null) {
            return DisplayRule.setIconPlacement(this.id, -1).catch((err) => {
                return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
            });
        }
        else {
            return DisplayRule.setIconPlacement(this.id, iconPlacement.valueOf()).catch((err) => {
                return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
            });
        }
    }
    async getLabelType() {
        return DisplayRule.getLabelType(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelType(labelType) {
        if (labelType == null) {
            return DisplayRule.setLabelType(this.id, -1).catch((err) => {
                return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
            });
        }
        else {
            return DisplayRule.setLabelType(this.id, labelType.valueOf()).catch((err) => {
                return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
            });
        }
    }
    async getLabelStyleTextSize() {
        return DisplayRule.getLabelStyleTextSize(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleTextSize(textSize) {
        if (textSize == null) {
            textSize = -1;
        }
        return DisplayRule.setLabelStyleTextSize(this.id, textSize).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleTextColor() {
        return DisplayRule.getLabelStyleTextColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleTextColor(textColor) {
        return DisplayRule.setLabelStyleTextColor(this.id, textColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleTextOpacity() {
        return DisplayRule.getLabelStyleTextOpacity(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleTextOpacity(textOpacity) {
        if (textOpacity == null) {
            textOpacity = -1;
        }
        return DisplayRule.setLabelStyleTextOpacity(this.id, textOpacity).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleHaloColor() {
        return DisplayRule.getLabelStyleHaloColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleHaloColor(color) {
        return DisplayRule.setLabelStyleHaloColor(this.id, color).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleHaloWidth() {
        return DisplayRule.getLabelStyleHaloWidth(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleHaloWidth(haloWidth) {
        if (haloWidth == null) {
            haloWidth = -1;
        }
        return DisplayRule.setLabelStyleHaloWidth(this.id, haloWidth).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleHaloBlur() {
        return DisplayRule.getLabelStyleHaloBlur(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleHaloBlur(haloBlur) {
        if (haloBlur == null) {
            haloBlur = -1;
        }
        return DisplayRule.setLabelStyleHaloBlur(this.id, haloBlur).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleBearing() {
        return DisplayRule.getLabelStyleBearing(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleBearing(bearing) {
        if (bearing == null) {
            bearing = -1;
        }
        return DisplayRule.setLabelStyleBearing(this.id, bearing).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setLabelStyleGraphic(graphicLabel) {
        return DisplayRule.setLabelStyleGraphic(this.id, JSON.stringify(graphicLabel)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getLabelStyleGraphic() {
        return DisplayRule.getLabelStyleGraphic(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getPolygonLightnessFactor() {
        return DisplayRule.getPolygonLightnessFactor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setPolygonLightnessFactor(lightnessFactor) {
        if (lightnessFactor == null) {
            lightnessFactor = -2;
        }
        return DisplayRule.setPolygonLightnessFactor(this.id, lightnessFactor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getWallLightnessFactor() {
        return DisplayRule.getWallLightnessFactor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setWallLightnessFactor(lightnessFactor) {
        if (lightnessFactor == null) {
            lightnessFactor = -2;
        }
        return DisplayRule.setWallLightnessFactor(this.id, lightnessFactor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getExtrusionLightnessFactor() {
        return DisplayRule.getExtrusionLightnessFactor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setExtrusionLightnessFactor(lightnessFactor) {
        if (lightnessFactor == null) {
            lightnessFactor = -2;
        }
        return DisplayRule.setExtrusionLightnessFactor(this.id, lightnessFactor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isBadgeVisible() {
        return DisplayRule.isBadgeVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeVisible(visible) {
        return DisplayRule.setBadgeVisible(this.id, JSON.stringify(visible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeZoomFrom() {
        return DisplayRule.getBadgeZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeZoomFrom(zoomFrom) {
        if (zoomFrom == null) {
            zoomFrom = -1;
        }
        return DisplayRule.setBadgeZoomFrom(this.id, zoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeZoomTo() {
        return DisplayRule.getBadgeZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeZoomTo(zoomTo) {
        if (zoomTo == null) {
            zoomTo = -1;
        }
        return DisplayRule.setBadgeZoomTo(this.id, zoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeRadius() {
        return DisplayRule.getBadgeRadius(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeRadius(radius) {
        if (radius == null) {
            radius = -1;
        }
        return DisplayRule.setBadgeRadius(this.id, radius).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeStrokeWidth() {
        return DisplayRule.getBadgeStrokeWidth(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeStrokeWidth(strokeWidth) {
        if (strokeWidth == null) {
            strokeWidth = -1;
        }
        return DisplayRule.setBadgeStrokeWidth(this.id, strokeWidth).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeStrokeColor() {
        return DisplayRule.getBadgeStrokeColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeStrokeColor(strokeColor) {
        return DisplayRule.setBadgeStrokeColor(this.id, strokeColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeFillColor() {
        return DisplayRule.getBadgeFillColor(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeFillColor(fillColor) {
        return DisplayRule.setBadgeFillColor(this.id, fillColor).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgeScale() {
        return DisplayRule.getBadgeScale(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgeScale(badgeScale) {
        if (badgeScale == null) {
            badgeScale = -1;
        }
        return DisplayRule.setBadgeScale(this.id, badgeScale).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getBadgePosition() {
        return DisplayRule.getBadgePosition(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setBadgePosition(badgePosition) {
        if (badgePosition == null) {
            return DisplayRule.setBadgePosition(this.id, -1).catch((err) => {
                return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
            });
        }
        else {
            return DisplayRule.setBadgePosition(this.id, badgePosition.valueOf()).catch((err) => {
                return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
            });
        }
    }
    async getModel3DModel() {
        return DisplayRule.getModel3DModel(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DModel(url) {
        return DisplayRule.setModel3DModel(this.id, url).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel3DRotationX() {
        return DisplayRule.getModel3DRotationX(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DRotationX(rotationX) {
        if (rotationX == null) {
            rotationX = -1;
        }
        return DisplayRule.setModel3DRotationX(this.id, rotationX).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel3DRotationY() {
        return DisplayRule.getModel3DRotationY(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DRotationY(rotationY) {
        if (rotationY == null) {
            rotationY = -1;
        }
        return DisplayRule.setModel3DRotationY(this.id, rotationY).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel3DRotationZ() {
        return DisplayRule.getModel3DRotationZ(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DRotationZ(rotationZ) {
        if (rotationZ == null) {
            rotationZ = -1;
        }
        return DisplayRule.setModel3DRotationZ(this.id, rotationZ).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel3DScale() {
        return DisplayRule.getModel3DScale(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DScale(scale) {
        if (scale == null) {
            scale = -1;
        }
        return DisplayRule.setModel3DScale(this.id, scale).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel3DZoomFrom() {
        return DisplayRule.getModel3DZoomFrom(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DZoomFrom(zoomFrom) {
        if (zoomFrom == null) {
            zoomFrom = -1;
        }
        return DisplayRule.setModel3DZoomFrom(this.id, zoomFrom).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async getModel3DZoomTo() {
        return DisplayRule.getModel3DZoomTo(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DZoomTo(zoomTo) {
        if (zoomTo == null) {
            zoomTo = -1;
        }
        return DisplayRule.setModel3DZoomTo(this.id, zoomTo).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async isModel3DVisible() {
        return DisplayRule.isModel3DVisible(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async setModel3DVisible(visible) {
        return DisplayRule.setModel3DVisible(this.id, JSON.stringify(visible)).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
    async reset() {
        return DisplayRule.reset(this.id).catch((err) => {
            return Promise.reject(index_1.MPError.create(JSON.parse(err.message)));
        });
    }
}
exports.default = MPDisplayRule;
//# sourceMappingURL=MPDisplayRule.js.map