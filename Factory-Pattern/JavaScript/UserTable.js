const mongojs = require('mongojs');
var db = mongojs('factorytable');
var userscollection = db.collection('users');

function UserTable() {}

UserTable.prototype.findbyname = function(name) {
    db.userscollection.findOne(name, function (err, docs) {
        return docs;
    });
}

UserTable.prototype.findAll = function() {
    db.userscollection.find(function (err, docs) {
        console.log(docs);
    });
}

UserTable.prototype.insert = function(user) {
    db.userscollection.save(user);
}

UserTable.prototype.delete = function(user) {
    db.userscollection.remove(user);
}

UserTable.prototype.deleteAll = function() {
    db.userscollection.remove({});
}


module.exports = UserTable;