export interface TableFactory() {
    createTable(type: string): Table;
}

