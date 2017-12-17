"use strict";
exports.__esModule = true;
var ValidationObserver_1 = require("./ValidationObserver");
var NotificationObserver_1 = require("./NotificationObserver");
var ObserverFactory = /** @class */ (function () {
    function ObserverFactory() {
    }
    ObserverFactory.prototype.createObserver = function (type) {
        switch (type) {
            case "ValidationObserver":
                return new ValidationObserver_1.ValidationObserver();
            case "NotificationObserver":
                return new NotificationObserver_1.NotificationObserver();
            default:
                console.log(new Error("undefined factory type"));
        }
    };
    return ObserverFactory;
}());
exports.ObserverFactory = ObserverFactory;
