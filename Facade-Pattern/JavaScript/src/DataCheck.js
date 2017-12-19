var Logger = require("./Logger");

class DataCheck {

    constructor() {
        this.logger = new Logger();
    }

    checkInsurance(person, callback) {
        setTimeout(function () {
            if (person.age < 18) {
                this.logger.printMessage("Can't set insurance for underaged person");
                callback(false);
            } else if (person.account === "invalid") {
                this.logger.printMessage("Can't set insurance with invalid account");
                callback(false);
            } else if (person.insurance === "yes") {
                this.logger.printMessage("Person already has a insurance");
                callback(false);
            } else {
                callback(true);
            }
        }, 1000);
    }
    
}
    module.exports = DataCheck;