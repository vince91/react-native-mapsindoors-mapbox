import { MPBuilding } from '../../index';
export interface OnBuildingFoundAtCameraTargetListener {
    (building?: MPBuilding): void;
}
