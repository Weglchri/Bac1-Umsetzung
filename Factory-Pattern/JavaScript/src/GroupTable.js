const mongojs = require('mongojs');
var db = mongojs('factorydb');
var groupscollection = db.collection('group');

class GroupTable {
    
    constructor() {}

    findByGroupname(groupname, callback) {
        db.groupscollection.findOne(groupname, function (err, docs) {
            callback(docs);
        });
    }

    findAll(callback) {
        db.groupscollection.find(function (err, docs) {
            callback(docs);
        });
    }

    insert(group) {
        db.groupscollection.save(group);
    }

    delete(group) {
        db.groupscollection.remove(group);
    }

    deleteAll() {
        db.groupscollection.remove({});
    }

}


module.exports = GroupTable;