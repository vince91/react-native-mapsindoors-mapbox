import { MPLocation } from '../../index';
export interface OnLocationSelectedListener {
    (location?: MPLocation): void;
}
