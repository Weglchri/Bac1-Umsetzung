var ValidationObserver = require("./ValidationObserver");
var NotificationObserver = require("./NotificationObserver");

class ObserverFactory {
    constructor() {}
    createObserver(type) {
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

module.exports = ObserverFactory;