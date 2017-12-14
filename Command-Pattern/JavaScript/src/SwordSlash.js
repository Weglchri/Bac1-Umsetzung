var Command = require("./Command");

class SwordSlash extends Command {
    constructor(knight) {
        super();
        this.knight = knight;
    }
    execute() {
        this.knight.swordslash();
    }
}

module.exports = SwordSlash;