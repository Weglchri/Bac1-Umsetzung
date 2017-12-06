
export interface Table {
    insert(criteria: object): void;
    delete(criteria: object): void;
    find(criteria: object): object;
}