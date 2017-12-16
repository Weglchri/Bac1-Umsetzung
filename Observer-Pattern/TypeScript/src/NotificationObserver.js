"use strict";
exports.__esModule = true;
var NotificationObserver = /** @class */ (function () {
    function NotificationObserver() {
    }
    NotificationObserver.prototype.update = function (ctx) {
        console.log("Following changes in object were made: " + JSON.stringify(ctx));
    };
    return NotificationObserver;
}());
exports.NotificationObserver = NotificationObserver;
