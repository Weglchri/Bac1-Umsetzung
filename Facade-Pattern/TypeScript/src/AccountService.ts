import {DataCheck} from "./DataCheck"
import {Validator} from "./Validator"
import {Logger} from "./Logger"
import {Person} from "./Person"

export class AccountService {

    logger:Logger = Logger.getInstance();
    
    constructor() {}

    checkPersonInsuranceClaim(person:Person):boolean {

        var permission = false;

        if (new Validator().validatePersonData(person) === true) {

            let permission = new DataCheck().checkInsurance(person);
            this.logger.printMessage("Person permission: " + permission);
            return permission;

        } else {

            this.logger.printMessage("Person permission: " + permission);
            return permission;

        }
    }
}