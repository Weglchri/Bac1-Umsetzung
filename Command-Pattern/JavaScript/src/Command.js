class Command {
    constructor() {
        if (this.constructor === Command) {
            throw new Error("Can't instantiate abstract command");
        }
    }
    execute() {}
}

module.exports = Command;