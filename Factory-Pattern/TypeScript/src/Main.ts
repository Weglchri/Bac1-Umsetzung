import { TableFactoryImpl } from "./TableFactoryImpl"
import { UserTable } from "./UserTable"
import { GroupTable } from "./GroupTable"

var factoryimpl = new TableFactoryImpl();
var usertable factoryimpl.createTable("UserTable");
var grouptable factoryimpl.createTable("GroupTable");

if (usertable instanceof UserTable) {
    console.log("is an instance");
}else{
    console.log("usertbl is not an instance");
}

if (grouptable instanceof GroupTable) {
    console.log("is an instance");
}else{
    console.log("groutbl is not an instance");
}