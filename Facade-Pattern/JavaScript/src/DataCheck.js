var Logger = require("./Logger");

class DataCheck {

    constructor() {
        this.logger = new Logger();
    }

    checkInsurance(person) {
        if (person.age < 18) {
            this.logger.printMessage("Can't set insurance for underaged person");
            return false;
        } else if (person.account === "invalid") {
            this.logger.printMessage("Can't set insurance with invalid account");
            return false;
        } else if (person.insurance === "yes") {
            this.logger.printMessage("Person already has a insurance");
            return false;
        } else {
            return true;
        }
    }
}

module.exports = DataCheck;