import { Observer } from "./Observer" 
import { Participant } from "./Participant"
import { Logger } from "./Logger";


export class ValidationObserver implements Observer {
    
    logger:Logger = Logger.getInstance();
    
    constructor() {}

    update(ctx:Participant) {
        if (ctx.name === undefined || ctx.name === null) {
            this.logger.throwError("Name can't be undefined or null");
        } else if (ctx.name === "") {
            this.logger.throwError("Name can't be empty");
        } else if (ctx.id < 1) {
            this.logger.throwError("Id can't be lower than one");
        } else {
            this.logger.logItem("Correct input");
        }
    }
}

