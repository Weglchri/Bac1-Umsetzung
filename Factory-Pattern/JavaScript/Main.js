var TableFactory = require('./TableFactory');
var GroupTable = require('./GroupTable');
var UserTable = require('./UserTable');

var newfact = new TableFactory();

var usertable = newfact.createTable({type: "UserTable"});

var grouptable = newfact.createTable({type: "GroupTable"});

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