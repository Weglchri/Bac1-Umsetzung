var UserTable = require('./UserTable');
var GroupTable = require('./GroupTable');

function TableFactory() {}

TableFactory.prototype.createTable = function (data) {

    switch(data.type) {
        case "UserTable":
            return new UserTable (data);
        case "GroupTable":
            return new GroupTable (data);
    }
    
};

module.exports = TableFactory;




