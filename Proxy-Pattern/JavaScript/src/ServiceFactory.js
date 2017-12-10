"use strict";

var FileHandlerProxy = require("./FileHandlerProxy");
var FileHandler = require("./FileHandler");

function ServiceFactory() {}

ServiceFactory.prototype.createFileHandler = function() {
    return new FileHandlerProxy(new FileHandler());
};

module.exports = ServiceFactory;