export default class MPSelectionBehavior {
    allowFloorChange: boolean;
    moveCamera: boolean;
    animationDuration: number;
    showInfoWindow: boolean;
    zoomToFit: boolean;
    private constructor();
    static create(object: MPSelectionBehaviorParams): MPSelectionBehavior;
}
export interface MPSelectionBehaviorParams {
    allowFloorChange?: boolean;
    moveCamera?: boolean;
    animationDuration?: number;
    showInfoWindow?: boolean;
    zoomToFit?: boolean;
}
