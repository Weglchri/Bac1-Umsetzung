import { ValidationObserver } from "./ValidationObserver"
import { NotificationObserver } from "./NotificationObserver"

export class ObserverFactory {
    constructor() {}
    createObserver(type:string) {
        switch (type) {
            case "ValidationObserver":
                return new ValidationObserver();
            case "NotificationObserver":
                return new NotificationObserver();
            default:
                console.log(new Error("undefined factory type"));
        }
    }
}
