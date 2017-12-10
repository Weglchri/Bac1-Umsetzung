"use strict";

var FileHandlerProxy = require("./FileHandlerProxy");
var FileHandler = require("./FileHandler");

class ServiceFactory {
    constructor() {}
    createFileHandler() {
        return new FileHandlerProxy(new FileHandler());
    }
}

module.exports = ServiceFactory;