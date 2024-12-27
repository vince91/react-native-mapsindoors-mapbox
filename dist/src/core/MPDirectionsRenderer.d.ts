import { NativeEventEmitter } from 'react-native';
import { MPCameraViewFitMode, MPRoute, OnLegSelectedListener } from "../../index";
import { RouteStopIconConfig } from './RouteStopIconConfig';
export default class MPDirectionsRenderer {
    private _defaultRouteStopIcon?;
    get defaultRouteStopIcon(): RouteStopIconConfig;
    private onLegSelectedSub?;
    private eventEmitter?;
    constructor(nativeEventEmitter: typeof NativeEventEmitter);
    clear(): Promise<void>;
    nextLeg(): Promise<void>;
    previousLeg(): Promise<void>;
    setRoute(route: MPRoute, stopIcons?: Map<number, RouteStopIconConfig>, legIndex?: number): Promise<void>;
    setDefaultRouteStopIcon(icon: RouteStopIconConfig): Promise<void>;
    setAnimatedPolyline(animated: boolean, repeating: boolean, durationMs: number): Promise<void>;
    showRouteLegButtons(show: boolean): Promise<void>;
    selectLegIndex(legIndex: number): Promise<void>;
    getSelectedLegFloorIndex(): Promise<number>;
    setCameraAnimationDuration(durationMs: number): Promise<void>;
    setCameraViewFitMode(fitMode: MPCameraViewFitMode): Promise<void>;
    setOnLegSelectedListener(listener?: OnLegSelectedListener): Promise<void>;
}
