var Observer = require("./Observer");
var Logger = require("./Logger");

class ValidationObserver extends Observer {
    constructor() {
        super();
    }

    update(ctx) {
        if (ctx.name === undefined || ctx.name === null) {
            new Logger().throwError("Name can't be undefined or null");
        } else if (ctx.name === "") {
            new Logger().throwError("Name can't be empty");
        } else if (ctx.id < 1) {
            new Logger().throwError("Id can't be lower than one");
        } else {
            new Logger().logItem("Correct input");
        }
    }
}

module.exports = ValidationObserver;