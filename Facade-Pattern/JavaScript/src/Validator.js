var Person = require("./Person");
var Logger = require("./Logger");

class Validator {
    
    constructor() {}
    
    validatePersonData(person) {
        if (!(person instanceof Person)) {
            new Logger().printMessage("Not an person");
            return false;
        } else if (!person.name) {
            new Logger().printMessage("Empty name field");
            return false;
        } else if (!person.age) {
            new Logger().printMessage("Empty age field");
            return false;
        } else if (!person.account) {
            new Logger().printMessage("Empty account field");
            return false;
        } else if (!person.transactions) {
            new Logger().printMessage("Empty transaction field");
            return false;
        } else if (!person.insurance) {
            new Logger().printMessage("Empty insurance field");
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Validator;