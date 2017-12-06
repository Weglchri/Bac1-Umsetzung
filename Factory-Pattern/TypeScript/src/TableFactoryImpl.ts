import { TableFactory } from "./TableFactory";
import { UserTable } from "./UserTable"
import { GroupTable } from "./GroupTable"
import { Table } from "./Table"

export class TableFactoryImpl implements TableFactory {
    createTable(type: string):Table {
        switch(type) {
            case "UserTable":
                return new UserTable();
            case "GroupTable":
                return new GroupTable();
            default:
                console.log(new Error("undefined factory type"));
        }
    }
}




