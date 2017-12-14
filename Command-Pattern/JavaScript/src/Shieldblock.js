var Command = require("./Command");

class ShieldBlock extends Command {
    constructor(knight) {
        super();
        this.knight = knight;
    }
    execute() {
        this.knight.shieldblock();
    }
}

module.exports = ShieldBlock;