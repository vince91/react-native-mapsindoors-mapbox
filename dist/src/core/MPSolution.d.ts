import { MPSolutionConfig } from "../../index";
import MPPOIType from "./MPPOIType";
export default class MPSolution {
    readonly id: string;
    readonly name: string;
    readonly solutionConfig: MPSolutionConfig;
    readonly defaultLanguage: string;
    readonly availableLanguages: string[];
    private readonly modules;
    readonly locationTemplates?: string;
    readonly customerId?: string;
    mapClientUrl?: string;
    readonly types?: MPPOIType[];
    private constructor();
    static create(object: MPSolutionParams): MPSolution;
    hasLanguage(language?: string): boolean;
    isZoom22Enabled(): boolean;
    is3DWallsEnabled(): boolean;
    is3DExtrusionsEnabled(): boolean;
    parseMapClient(venueId: string, locationId: string): Promise<string>;
}
export interface MPSolutionParams {
    id: string;
    name: string;
    solutionConfig: MPSolutionConfig;
    customerId?: string;
    defaultLanguage: string;
    availableLanguages: string[];
    mapClientUrl?: string;
    locationTemplates?: string;
    types?: MPPOIType[];
    modules: string[];
}
