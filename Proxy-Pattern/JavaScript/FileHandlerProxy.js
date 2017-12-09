'use strict';

function FileHandlerProxy(Filehandler) {

    //private object Filehandler 
    var Filehandler = Filehandler;
    
    //privileged methods
    //user of filehandler don't recognise the proxy
    this.insertFile = function (file) {
        Filehandler.insertFile(file);
    };

    this.findAll = function (callback) {
        Filehandler.findAll(function (data) {
            callback(data);
        });
    };

    this.findFilebyFilename = function (filename, callback) {
        Filehandler.findFilebyFilename(filename, function (data) {
            callback(data);
        });
    };
    
    this.updateFile = function(file) {
        return "Unsupported Operation";
    }

    this.deleteFile = function (file) {
        Filehandler.deleteFile(file);
    };
    
    this.deleteAll = function() {
        Filehandler.deleteAll();
    };
}


/*
FileHandlerProxy.prototype.insertFile = function (file) {
    this.getFilehandler.insertFile(file);
};


FileHandlerProxy.prototype.findAll = function (callback) {
    this.getFilehandler.findAll(function(data){
        callback(data);
    });
};

FileHandlerProxy.prototype.findFilebyFilename = function (filename, callback) {
    this.getFilehandler.findFilebyFilename(filename, function(data){
        callback(data);
    });
};

FileHandlerProxy.prototype.updateFile = function () {};

FileHandlerProxy.prototype.deleteFile = function () {};
*/

module.exports = FileHandlerProxy;