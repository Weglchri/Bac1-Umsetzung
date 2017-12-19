var DataCheck = require("./DataCheck");
var Validator = require("./Validator");
var Logger = require("./Logger");

class AccountService {

    constructor() {
        this.validator = new Validator();
        this.datacheck = new DataCheck();
        this.logger = new Logger();
    }

    checkPersonInsuranceClaim(person, callback) {

        var permission = false;

        if (this.validator.validatePersonData(person) === true) {
            this.datacheck.checkInsurance(person, function(permission) {
                new Logger().printMessage("Person permission: " + permission);
                callback(permission);
            });
        } else {

            this.logger.printMessage("Person permission: " + permission);
            callback(permission);

        }
    }
}




module.exports = AccountService;