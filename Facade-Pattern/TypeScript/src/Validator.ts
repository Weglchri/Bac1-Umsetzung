import {Person} from "./Person"
import {Logger} from "./Logger"

export class Validator {
    
    logger:Logger = Logger.getInstance();
    
    constructor() {}
    
    validatePersonData(person:Person) {
        if (!(person instanceof Person)) {
            this.logger.printMessage("Not an person");
            return false;
        } else if (!person.name) {
            this.logger.printMessage("Empty name field");
            return false;
        } else if (!person.age) {
            this.logger.printMessage("Empty age field");
            return false;
        } else if (!person.account) {
            this.logger.printMessage("Empty account field");
            return false;
        } else if (!person.transactions) {
            this.logger.printMessage("Empty transaction field");
            return false;
        } else if (!person.insurance) {
            this.logger.printMessage("Empty insurance field");
            return false;
        } else {
            return true;
        }
    }
}
