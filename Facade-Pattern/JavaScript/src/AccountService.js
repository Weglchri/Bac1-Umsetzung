var DataCheck = require("./DataCheck");
var Validator = require("./Validator");
var Logger = require("./Logger");

class AccountService {

    constructor() {}

    checkPersonInsuranceClaim(person, callback) {
        let vaildator = new Validator();
        let datacheck = new DataCheck();
        var permission = false;

        if (vaildator.validatePersonData(person) === true) {
            datacheck.checkInsurance(person, function (permission) {
                new Logger().printMessage("Person permission: " + permission);
                callback(permission);
            });
        } else {
            new Logger().printMessage("Person permission: " + permission);
            callback(permission);
        }
    }
}




module.exports = AccountService;