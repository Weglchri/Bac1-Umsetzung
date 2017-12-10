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



module.exports = FileHandlerProxy;