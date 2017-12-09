var UserTable = require('./UserTable');
var GroupTable = require('./GroupTable');

function TableFactory() {}

TableFactory.prototype.createTable = function (type) {

    switch(type) {
        case "UserTable":
            return new UserTable();
        case "GroupTable":
            return new GroupTable();
        default:
            console.log(new Error("undefined factory type"));
    }
};

module.exports = TableFactory;




