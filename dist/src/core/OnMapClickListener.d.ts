import { MPPoint, MPLocation } from '../../index';
export interface OnMapClickListener {
    (point: MPPoint, locations?: MPLocation[]): void;
}
