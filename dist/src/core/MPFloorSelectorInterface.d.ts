import { MPFloor, OnFloorSelectionChangedListener } from "../../index";
export interface MPFloorSelectorInterface {
    setFloors(floors: Array<MPFloor> | undefined): void;
    setOnFloorSelectionChangedListener(listener: OnFloorSelectionChangedListener): void;
    show(show: boolean, animated: boolean): void;
    setSelectedFloor(floor: MPFloor): void;
    setSelectedFloorByFloorIndex(floorIndex: number): void;
    zoomLevelChanged(newZoomLevel: number): void;
    isAutoFloorChangeEnabled(): boolean;
    setUserPositionFloor(floorIndex: number): void;
}
