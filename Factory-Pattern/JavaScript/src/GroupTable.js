const mongojs = require('mongojs');
var db = mongojs('factorydb');
var groupscollection = db.collection('group');

function GroupTable () {}

GroupTable.prototype.findByGroupname = function(groupname, callback) {
    db.groupscollection.findOne(groupname, function (err, docs) {
        callback(docs);
    });
}

GroupTable.prototype.findAll = function(callback) {
    db.groupscollection.find(function (err, docs) {
        callback(docs);
    });
}

GroupTable.prototype.insert = function(group) {
    db.groupscollection.save(group);
}

GroupTable.prototype.delete = function(group) {
    db.groupscollection.remove(group);
}

GroupTable.prototype.deleteAll = function() {
    db.groupscollection.remove({});
}



module.exports = GroupTable;