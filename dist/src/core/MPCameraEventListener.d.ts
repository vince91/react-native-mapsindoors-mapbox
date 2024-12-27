import { MPCameraEvent } from "../../index";
export default interface MPCameraEventListener {
    (event: MPCameraEvent): void;
}
