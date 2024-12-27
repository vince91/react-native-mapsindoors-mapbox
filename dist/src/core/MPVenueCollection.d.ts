import MPCollection from "./MPCollection";
import MPVenue from "./MPVenue";
export default class MPVenueCollection extends MPCollection<MPVenue> {
    private adminIdMap;
    private constructor();
    getVenueByAdminId(id: string): MPVenue | undefined;
    static create(object?: any): MPVenueCollection;
}
