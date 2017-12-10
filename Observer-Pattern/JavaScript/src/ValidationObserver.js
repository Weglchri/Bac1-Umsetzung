var Observer = require("./Observer");

class ValidationObserver extends Observer {
    constructor() {
        super();
    }

    update(val) {
        if (val === undefined || val === null) {
            console.log(new Error("Name can't be undefined or null"));
        } else if (val === "") {
            console.log(new Error("Name an't be empty"));
        } else if (val < 0) {
            console.log(new Error("Can't be little than zero"));
        }
    }
}

module.exports = ValidationObserver;