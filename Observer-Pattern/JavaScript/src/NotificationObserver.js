var Observer = require("./Observer");

class NotificationObserver extends Observer {
    constructor() {
        super();
    }

    update(val) {
        console.log("Following changes where made: " + val);
        return "Following changes were made: " + val;
    }
}

module.exports = NotificationObserver;