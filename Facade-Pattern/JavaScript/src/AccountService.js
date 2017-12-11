var DataCheck = require("./DataCheck");
var Validator = require("./Validator");
var Logger = require("./Logger");

class AccountService {
    constructor() {}
    checkPersonInsuranceClaim(person) {
        if (new Validator().validatePersonData(person) === true) {
            let processed = new DataCheck().checkInsurance(person);
            new Logger().printProcessed("Person permission: " + processed);
            return processed;
        } else {
            new Logger().printUnprocessed("Person permission: false");
            return false;
        }
    }
}




module.exports = AccountService;