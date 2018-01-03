"use strict";
exports.__esModule = true;
var Logger_1 = require("./Logger");
var DataCheck = /** @class */ (function () {
    function DataCheck() {
    }
    DataCheck.prototype.checkInsurance = function (person) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (person.age < 18) {
                    Logger_1.Logger.getInstance().printMessage("Can't set insurance for underaged person");
                    resolve(false);
                }
                else if (person.account === "invalid") {
                    Logger_1.Logger.getInstance().printMessage("Can't set insurance with invalid account");
                    resolve(false);
                }
                else if (person.insurance === "yes") {
                    Logger_1.Logger.getInstance().printMessage("Person already has a insurance");
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            }, 1000);
        });
    };
    return DataCheck;
}());
exports.DataCheck = DataCheck;
