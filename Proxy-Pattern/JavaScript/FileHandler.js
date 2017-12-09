"use strict";

const mongojs = require('mongojs');
var db = mongojs('proxydb');
var filescollection = db.collection('files');

function FileHandler() {}

FileHandler.prototype.insertFile = function (file) {
    db.filescollection.save(file);
};

FileHandler.prototype.findAll = function (callback) {
    db.filescollection.find(function (err, docs) {
        callback(docs);
    });
};

FileHandler.prototype.findFilebyFilename = function (file, callback) {
   db.filescollection.findOne(file, function (err, docs){
        callback(docs);
    });
};

FileHandler.prototype.update = function() {
    //Unsupported Operation for proxytesting  
};

FileHandler.prototype.deleteFile = function (file) {
    db.filescollection.remove(file);
};

FileHandler.prototype.deleteAll = function () {
    db.filescollection.remove({});
};


module.exports = FileHandler;