"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Logger_1 = require("./Logger");
var Validator = /** @class */ (function () {
    function Validator() {
        this.logger = Logger_1.Logger.getInstance();
    }
    Validator.prototype.validatePersonData = function (person) {
        if (!(person instanceof Person_1.Person)) {
            this.logger.printMessage("Not an person");
            return false;
        }
        else if (!person.name) {
            this.logger.printMessage("Empty name field");
            return false;
        }
        else if (!person.age) {
            this.logger.printMessage("Empty age field");
            return false;
        }
        else if (!person.account) {
            this.logger.printMessage("Empty account field");
            return false;
        }
        else if (!person.transactions) {
            this.logger.printMessage("Empty transaction field");
            return false;
        }
        else if (!person.insurance) {
            this.logger.printMessage("Empty insurance field");
            return false;
        }
        else {
            return true;
        }
    };
    return Validator;
}());
exports.Validator = Validator;
