var Command = require("./Command");

class RemoveModule extends Command {
    constructor(OperationModule) {
        super();
        this.OperationModule = OperationModule;
    }
    execute() {
        this.OperationModule.removemodule();
    }
}

module.exports = RemoveModule;