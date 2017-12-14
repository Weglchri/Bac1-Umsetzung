var Observer = require("./Observer");
var Logger = require("./Logger");

class NotificationObserver extends Observer {
    constructor() {
        super();
    }

    update(ctx) {
        console.log("Following changes in object were made: " + JSON.stringify(ctx));
    }
}

module.exports = NotificationObserver;