var DataCheck = require("./DataCheck");
var Validator = require("./Validator");
var Logger = require("./Logger");

class AccountService {

    constructor() {}

    checkPersonInsuranceClaim(person) {

        var permission = false;

        if (new Validator().validatePersonData(person) === true) {

            let permission = new DataCheck().checkInsurance(person);
            new Logger().printMessage("Person permission: " + permission);
            return permission;

        } else {

            new Logger().printMessage("Person permission: " + permission);
            return permission;

        }
    }
}




module.exports = AccountService;