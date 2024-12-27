import { MPPoint, MPRoute } from "../../index";
export default class MPDirectionsService {
    private readonly id;
    private constructor();
    static create(): Promise<MPDirectionsService>;
    addAvoidWayType(wayType: string): Promise<void>;
    clearWayType(): Promise<void>;
    addExcludeWayType(wayType: string): Promise<void>;
    clearExcludeWayType(): Promise<void>;
    setIsDeparture(isDeparture: boolean): Promise<void>;
    getRoute(origin: MPPoint, destination: MPPoint, stops?: MPPoint[], optimze?: boolean): Promise<MPRoute>;
    setTravelMode(travelMode: string): Promise<void>;
    setTime(time: number): Promise<void>;
}
