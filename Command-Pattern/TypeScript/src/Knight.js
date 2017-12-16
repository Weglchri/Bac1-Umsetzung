"use strict";
exports.__esModule = true;
var Logger_1 = require("./Logger");
var Knight = /** @class */ (function () {
    function Knight() {
        this.logger = Logger_1.Logger.getInstance();
    }
    //knight actor jump action
    Knight.prototype.jumpmove = function () {
        this.logger.logItem("jumpmove");
    };
    //knight actor sword action
    Knight.prototype.swordslash = function () {
        this.logger.logItem("swordslash");
    };
    //knight actor shield action
    Knight.prototype.shieldblock = function () {
        this.logger.logItem("shieldblock");
    };
    return Knight;
}());
exports.Knight = Knight;
