"use strict";

const mongojs = require('mongojs');
var db = mongojs('proxydb');
var filescollection = db.collection('files');

class FileHandler {
    constructor() {

    }

    insertFile(file) {
        db.filescollection.save(file);
    }

    findAll(callback) {
        db.filescollection.find(function (err, docs) {
            callback(docs);
        });
    }

    findFilebyFilename(file, callback) {
        db.filescollection.findOne(file, function (err, docs) {
            callback(docs);
        });
    }

    update() {
        //Unsupported Operation for proxytesting  
    }

    deleteFile(file) {
        db.filescollection.remove(file);
    }

    deleteAll() {
        db.filescollection.remove({});
    };

}


module.exports = FileHandler;