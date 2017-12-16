const mongojs = require('mongojs');
var db = mongojs('compositedb');
var datacollection = db.collection('data');

class FileHandler {

    constructor() {}

    find(filename, callback) {
        db.datacollection.findOne(filename, function (err, docs) {
            callback(docs);
        });
    }

    findAll(callback) {
        db.datacollection.find(function (err, docs) {
            callback(docs);
        });
    }

    insert(node) {
        db.datacollection.save(node);
    }

    delete(node) {
        db.datacollection.remove(node);
    }

    deleteAll() {
        db.datacollection.remove({});
    }
    
}


module.exports = FileHandler;