const mongojs = require('mongojs');
var db = mongojs('factorytable');
var groupscollection = db.collection('group');

function GroupTable () {}

GroupTable.prototype.findbygroupname = function(groupname) {
    db.groupscollection.findOne(groupname, function (err, docs) {
        console.log(docs);
    });
}

GroupTable.prototype.findAll = function() {
    db.groupscollection.find(function (err, docs) {
        console.log(docs);
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