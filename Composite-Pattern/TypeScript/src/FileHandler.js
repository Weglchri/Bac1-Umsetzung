"use strict";
exports.__esModule = true;
var FileHandler = /** @class */ (function () {
    function FileHandler() {
    }
    FileHandler.prototype.find = function (filename, callback) {
        throw new Error("Unsupported operation");
    };
    FileHandler.prototype.findAll = function (callback) {
        throw new Error("Unsupported operation");
    };
    FileHandler.prototype.insert = function (node) { };
    FileHandler.prototype["delete"] = function (node) { };
    FileHandler.prototype.deleteAll = function () { };
    return FileHandler;
}());
exports.FileHandler = FileHandler;
