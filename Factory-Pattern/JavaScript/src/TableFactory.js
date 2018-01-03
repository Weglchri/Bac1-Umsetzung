var UserTable = require('./UserTable');
var GroupTable = require('./GroupTable');

class TableFactory {
    
    constructor() {}

    createTable(type) {
        switch (type) {
            case "UserTable":
                return new UserTable();
            case "GroupTable":
                return new GroupTable();
            default:
                throw new Error("Undefined factory type");
        }
    }

}

module.exports = TableFactory;