const mongojs = require('mongojs');
var db = mongojs('compositedb');
var datacollection = db.collection('data');

class FileHandler {

    constructor() {}

    findByFilename(filename, callback) {
        db.datacollection.findOne(filename, function (err, docs) {
            callback(docs);
        });
    }

    findAll(callback) {
        db.datacollection.find(function (err, docs) {
            callback(docs);
        });
    }

    insert(user) {
        db.datacollection.save(user);
    }

    delete(user) {
        db.datacollection.remove(user);
    }

    deleteAll() {
        db.datacollection.remove({});
    }
    
}


module.exports = FileHandler;