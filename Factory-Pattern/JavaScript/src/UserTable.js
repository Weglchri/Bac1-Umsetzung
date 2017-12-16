const mongojs = require('mongojs');
var db = mongojs('factorydb');
var userscollection = db.collection('users');

var Table = require("./Table");

class UserTable extends Table {

    constructor() {
        super();
    }

    find(username, callback) {
        db.userscollection.findOne(username, function (err, docs) {
            callback(docs);
        });
    }

    findAll(callback) {
        db.userscollection.find(function (err, docs) {
            callback(docs);
        });
    }

    insert(user) {
        db.userscollection.save(user);
    }

    delete(user) {
        db.userscollection.remove(user);
    }

    deleteAll() {
        db.userscollection.remove({});
    }


}

module.exports = UserTable;