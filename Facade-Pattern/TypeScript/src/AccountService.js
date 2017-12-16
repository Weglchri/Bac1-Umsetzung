"use strict";
exports.__esModule = true;
var DataCheck_1 = require("./DataCheck");
var Validator_1 = require("./Validator");
var Logger_1 = require("./Logger");
var AccountService = /** @class */ (function () {
    function AccountService() {
        this.logger = Logger_1.Logger.getInstance();
    }
    AccountService.prototype.checkPersonInsuranceClaim = function (person) {
        var permission = false;
        if (new Validator_1.Validator().validatePersonData(person) === true) {
            var permission_1 = new DataCheck_1.DataCheck().checkInsurance(person);
            this.logger.printMessage("Person permission: " + permission_1);
            return permission_1;
        }
        else {
            this.logger.printMessage("Person permission: " + permission);
            return permission;
        }
    };
    return AccountService;
}());
exports.AccountService = AccountService;
