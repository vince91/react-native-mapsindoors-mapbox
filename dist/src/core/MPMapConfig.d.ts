import { MPFloorSelectorInterface } from "../../index";
export default class MPMapConfig {
    readonly useDefaultMapsIndoorsStyle: boolean;
    readonly typeface?: string;
    readonly color?: string;
    readonly showHalo?: boolean;
    readonly textSize?: number;
    readonly showFloorSelector?: boolean;
    readonly showInfoWindowOnClick?: boolean;
    readonly showUserPosition?: boolean;
    readonly enableTileFadeIn?: boolean;
    readonly floorSelector?: MPFloorSelectorInterface;
    readonly mapsIndoorsTransitionLevel?: number;
    readonly showMapMarkers?: boolean;
    readonly showRoadLabels?: boolean;
    constructor(params: MPMapConfigParams);
}
export interface MapLabelFont {
    typeface: string;
    color: string;
    showHalo: boolean;
}
export interface MPMapConfigParams {
    useDefaultMapsIndoorsStyle: boolean;
    mapLabelFont?: MapLabelFont;
    textSize?: number;
    showFloorSelector?: boolean;
    showInfoWindowOnClick?: boolean;
    showUserPosition?: boolean;
    enableTileFadeIn?: boolean;
    floorSelector?: MPFloorSelectorInterface;
    mapsIndoorsTransitionLevel?: number;
    showMapMarkers?: boolean;
    showRoadLabels?: boolean;
}
