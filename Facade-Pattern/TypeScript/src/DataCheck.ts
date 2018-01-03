import {Logger} from "./Logger"
import {Person} from "./Person"

export class DataCheck {
        
    constructor() {}
    
    checkInsurance(person:Person):Promise<boolean> {
        return new Promise<boolean>(function(resolve) {
            setTimeout(function() {
                if(person.age < 18) {
                    Logger.getInstance().printMessage("Can't set insurance for underaged person");
                    resolve(false);
                } else if (person.account === "invalid") {
                    Logger.getInstance().printMessage("Can't set insurance with invalid account");
                    resolve(false);
                } else if (person.insurance === "yes") {
                    Logger.getInstance().printMessage("Person already has a insurance");
                    resolve(false);
                } else {
                    resolve(true);
                } 
            }, 1000);
        });
    } 
}
