import { MPFloor } from '../../index';
export interface OnFloorSelectionChangedListener {
    (newFloor: MPFloor): void;
}
