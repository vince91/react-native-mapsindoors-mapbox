export default class MPFilterBehavior {
    allowFloorChange: boolean;
    moveCamera: boolean;
    animationDuration: number;
    showInfoWindow: boolean;
    zoomToFit: boolean;
    private constructor();
    static create(object?: MPFilterBehaviorParams): MPFilterBehavior;
}
export interface MPFilterBehaviorParams {
    allowFloorChange?: boolean;
    moveCamera?: boolean;
    animationDuration?: number;
    showInfoWindow?: boolean;
    zoomToFit?: boolean;
}
