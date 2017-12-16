import { ValidationObserver } from "./ValidationObserver"
import { NotificationObserver } from "./NotificationObserver"

export class ObserverFactory {
    constructor() {}
    createObserver(type:string) {
        switch (type) {
            case "validation":
                return new ValidationObserver();
            case "notification":
                return new NotificationObserver();
            default:
                console.log(new Error("undefined factory type"));
        }
    }
}
