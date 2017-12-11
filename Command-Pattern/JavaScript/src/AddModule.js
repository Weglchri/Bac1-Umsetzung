var Command = require("./Command");

class AddModule extends Command {
    constructor(operationmodule) {
        super();
        this.operationmodule = operationmodule;
    }
    execute() {
        this.operationmodule.addmodule();
    }

}

module.exports = AddModule;