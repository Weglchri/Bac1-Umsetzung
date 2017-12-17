var ValidationObserver = require("./ValidationObserver");
var NotificationObserver = require("./NotificationObserver");

class ObserverFactory {
    constructor() {}
    createObserver(type) {
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

module.exports = ObserverFactory;