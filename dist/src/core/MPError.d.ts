export default class MPError {
    readonly code: number;
    readonly message: string;
    readonly status?: number;
    readonly tag?: any;
    static readonly networkError: number;
    static readonly unknownError: number;
    static readonly sdkNotInitialized: number;
    static readonly invalidApiKey: number;
    constructor(code: number, message: string, status?: number, tag?: any);
    static create(object: MPErrorParams): MPError;
    static parse(error: Error): MPError;
}
interface MPErrorParams {
    code: number;
    message: string;
    status?: number;
    tag?: any;
}
export {};
