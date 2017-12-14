const mongojs = require('mongojs');
var db = mongojs('factorydb');
var userscollection = db.collection('users');

function UserTable() {}


UserTable.prototype.findByUsername = function(username, callback) {
    db.userscollection.findOne(username, function (err, docs) {
        callback(docs);
    });
}

UserTable.prototype.findAll = function(callback) {
    db.userscollection.find(function (err, docs) {
       callback(docs);
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