import MPLocation from "./MPLocation";
export interface OnLiveLocationUpdateListener {
    (location: MPLocation): void;
}
