import { OnPositionUpdateListener, MPPositionResultInterface } from "../../index";
export declare abstract class MPPositionProviderInterface {
    abstract addOnPositionUpdateListener(listener: OnPositionUpdateListener): void;
    abstract removeOnPositionUpdateListener(listener: OnPositionUpdateListener): void;
    abstract getLatestPosition(): MPPositionResultInterface | undefined;
    abstract get name(): string;
}
