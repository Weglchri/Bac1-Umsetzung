const mongojs = require('mongojs');
var db = mongojs('factorydb');
var userscollection = db.collection('users');

class UserTable {

    constructor() {}

    findByUsername(username, callback) {
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