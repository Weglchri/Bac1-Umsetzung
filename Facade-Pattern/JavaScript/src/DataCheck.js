var Logger = require("./Logger");

class DataCheck {
    
    constructor() {}
    
    checkInsurance(person) {
        
        if(person.age < 18) {
            new Logger().printMessage("Can't set insurance for underaged person");
            return false;
        } else if (person.account === "invalid") {
            new Logger().printMessage("Can't set insurance with invalid account");
            return false;
        } else if (person.insurance === "yes") {
            new Logger().printMessage("Person already has a insurance");
            return false;
        } else {
            return true;
        } 
    
    }
    
}

module.exports = DataCheck;