export default abstract class MPCollection<Type> {
    protected map: Map<String, Type>;
    protected constructor();
    getAll(): Array<Type>;
    getById(id: string): Type | undefined;
    get size(): number;
}
