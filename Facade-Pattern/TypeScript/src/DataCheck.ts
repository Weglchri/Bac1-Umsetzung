import {Logger} from "./Logger"
import {Person} from "./Person"

export class DataCheck {
    
    logger:Logger = Logger.getInstance();
    
    constructor() {}
    
    checkInsurance(person:Person):boolean {
        if(person.age < 18) {
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
