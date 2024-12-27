export default class MPUserRole {
    readonly id: string;
    readonly name: string;
    private constructor();
    static create(object: MPUserRoleParams): MPUserRole;
}
export interface MPUserRoleParams {
    id: string;
    name: string;
}
