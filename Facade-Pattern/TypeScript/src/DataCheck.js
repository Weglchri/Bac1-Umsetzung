"use strict";
exports.__esModule = true;
var Logger_1 = require("./Logger");
var DataCheck = /** @class */ (function () {
    function DataCheck() {
        this.logger = Logger_1.Logger.getInstance();
    }
    DataCheck.prototype.checkInsurance = function (person) {
        if (person.age < 18) {
            this.logger.printMessage("Can't set insurance for underaged person");
            return false;
        }
        else if (person.account === "invalid") {
            this.logger.printMessage("Can't set insurance with invalid account");
            return false;
        }
        else if (person.insurance === "yes") {
            this.logger.printMessage("Person already has a insurance");
            return false;
        }
        else {
            return true;
        }
    };
    return DataCheck;
}());
exports.DataCheck = DataCheck;
