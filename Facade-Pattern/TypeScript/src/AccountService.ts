import {DataCheck} from "./DataCheck"
import {Validator} from "./Validator"
import {Logger} from "./Logger"
import {Person} from "./Person"

export class AccountService {

    private logger:Logger;
    private validator:Validator;
    private datacheck:DataCheck;
    
    constructor() {
        this.logger = Logger.getInstance();
        this.validator = new Validator();
        this.datacheck = new DataCheck();
    }

    async checkPersonInsuranceClaim(person:Person):Promise<boolean> {

        var permission = false;

        if (this.validator.validatePersonData(person) === true) {

            let permission = await this.datacheck.checkInsurance(person);
            this.logger.printMessage("Person permission: " + permission);
            return permission;

        } else {

            this.logger.printMessage("Person permission: " + permission);
            return permission;

        }
    }
}