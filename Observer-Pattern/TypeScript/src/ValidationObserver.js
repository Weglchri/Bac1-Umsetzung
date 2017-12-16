"use strict";
exports.__esModule = true;
var Logger_1 = require("./Logger");
var ValidationObserver = /** @class */ (function () {
    function ValidationObserver() {
        this.logger = Logger_1.Logger.getInstance();
    }
    ValidationObserver.prototype.update = function (ctx) {
        if (ctx.name === undefined || ctx.name === null) {
            this.logger.throwError("Name can't be undefined or null");
        }
        else if (ctx.name === "") {
            this.logger.throwError("Name can't be empty");
        }
        else if (ctx.id < 1) {
            this.logger.throwError("Id can't be lower than one");
        }
        else {
            this.logger.logItem("Correct input");
        }
    };
    return ValidationObserver;
}());
exports.ValidationObserver = ValidationObserver;
