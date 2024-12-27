export default class MPHighlightBehavior {
    allowFloorChange: boolean;
    moveCamera: boolean;
    animationDuration: number;
    showInfoWindow: boolean;
    zoomToFit: boolean;
    private constructor();
    static create(object?: MPHighlightBehaviorParams): MPHighlightBehavior;
}
export interface MPHighlightBehaviorParams {
    allowFloorChange?: boolean;
    moveCamera?: boolean;
    animationDuration?: number;
    showInfoWindow?: boolean;
    zoomToFit?: boolean;
}
