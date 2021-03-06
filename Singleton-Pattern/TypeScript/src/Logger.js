"use strict";
exports.__esModule = true;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        return Logger.INSTANCE;
    };
    Logger.prototype.getCreationDate = function () {
        return Logger.date;
    };
    Logger.prototype.printMessage = function (msg) {
        console.log(msg);
    };
    Logger.prototype.logItem = function (msg) {
        Logger.logs.push(msg);
    };
    Logger.prototype.lastLoggedItem = function () {
        return Logger.logs[Logger.logs.length - 1];
    };
    Logger.prototype.throwError = function (msg) {
        var err = new Error(msg);
        this.logItem(err.message);
        console.log(err);
    };
    Logger.INSTANCE = new Logger();
    Logger.logs = new Array();
    Logger.date = new Date();
    return Logger;
}());
exports.Logger = Logger;
