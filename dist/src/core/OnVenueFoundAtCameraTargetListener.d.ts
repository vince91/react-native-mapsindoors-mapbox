import { MPVenue } from '../../index';
export interface OnVenueFoundAtCameraTargetListener {
    (venue?: MPVenue): void;
}
