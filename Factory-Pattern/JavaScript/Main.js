var TableFactory = require('./TableFactory');
var GroupTable = require('./GroupTable');
var UserTable = require('./UserTable');
var User = require("./User");
var Group = require("./Group");

var newfactory = new TableFactory();

var usertable = newfactory.createTable("UserTable");

var grouptable = newfactory.createTable("GroupTable");

var user = new User("Christopher", 23, "Graz");
var user2 = new User("Fritz", 56, "Kapfenberg");

//usertable.insert(user);
//usertable.findbyname({name: "Christopher"});

var group = new Group("FH-Group");
group.adduser(user);
group.adduser(user2);

group.deleteuser(user);
grouptable.insert(group);
console.log(group.getusers());

