export interface IRepository<T> {
    create(item: T): void;
    read(): IterableIterator<T>;
    update(id: number, item: T): void;
    delete(id: number): void;
}