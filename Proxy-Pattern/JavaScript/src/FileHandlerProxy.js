'use strict';

class FileHandlerProxy {
    
    //Filehandler in this case is pseudo private 
    constructor(Filehandler) {
        this._Filehandler = Filehandler;
    }
    
    //privileged methods
    //user of filehandler don't recognise the proxy
    insertFile(file) {
        this._Filehandler.insertFile(file);
    }

    findAll(callback) {
        this._Filehandler.findAll(function (data) {
            callback(data);
        });
    }

    findFilebyFilename(filename, callback) {
        this._Filehandler.findFilebyFilename(filename, function (data) {
            callback(data);
        });
    }
    
    updateFile(file) {
        return "Unsupported Operation";
    }

    deleteFile(file) {
        this._Filehandler.deleteFile(file);
    }
    
    deleteAll() {
        this._Filehandler.deleteAll();
    } 
}

module.exports = FileHandlerProxy;