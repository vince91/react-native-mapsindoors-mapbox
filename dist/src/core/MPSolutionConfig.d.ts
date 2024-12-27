import { MPCollisionHandling, MPSettings3D } from "../../index";
import MPLocationSettings from "./MPLocationSettings";
export default class MPSolutionConfig {
    readonly id: string;
    readonly settings3D: MPSettings3D;
    readonly locationSettings: MPLocationSettings;
    private _enableClustering?;
    private _mpCollisionHandling?;
    private _isNewSelection?;
    private constructor();
    static create(object: MPSolutionConfigParams): MPSolutionConfig;
    set collisionHandling(collisionHandling: MPCollisionHandling);
    get collisionHandling(): MPCollisionHandling;
    set enableClustering(enable: boolean);
    get enableClustering(): boolean;
    set isNewSelection(enable: boolean);
    get isNewSelection(): boolean;
    get selectable(): boolean | undefined;
    set selectable(selectable: boolean | undefined);
}
export interface MPSolutionConfigParams {
    id: string;
    settings3D: MPSettings3D;
    enableClustering?: boolean;
    collisionHandling?: MPCollisionHandling;
    isNewSelection?: boolean;
    locationSettings: MPLocationSettings;
}
