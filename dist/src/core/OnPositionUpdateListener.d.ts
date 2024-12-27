import { MPPositionResultInterface } from '../../index';
export interface OnPositionUpdateListener {
    (position: MPPositionResultInterface): void;
}
