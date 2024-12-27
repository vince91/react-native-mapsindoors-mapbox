import MPBuilding from "./MPBuilding";
import MPCollection from "./MPCollection";
export default class MPBuildingCollection extends MPCollection<MPBuilding> {
    private nameMap;
    private constructor();
    getBuildingByAdminId(id: string): MPBuilding | undefined;
    static create(object?: any): MPBuildingCollection;
}
