import { Table } from "./Table"

export interface TableFactory {
    createTable(type:string):Table;
}

