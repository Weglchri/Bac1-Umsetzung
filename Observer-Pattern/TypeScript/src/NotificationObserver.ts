import { Observer } from "./Observer" 
import { Logger } from "./Logger"
import { Participant } from "./Participant"

export class NotificationObserver implements Observer {
    constructor() {}

    update(ctx:Participant) {
        console.log("Following changes in object were made: " + JSON.stringify(ctx));
    }
}
