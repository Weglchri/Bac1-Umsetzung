import { TableFactory } from "./TableFactory";
import { Table } from "./Table"
import { UserTable } from "./UserTable"
import { GroupTable } from "./GroupTable"


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




