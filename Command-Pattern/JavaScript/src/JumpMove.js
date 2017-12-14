var Command = require("./Command");

class JumpMove extends Command {
    
    constructor(knight) {
        super();
        this.knight = knight;
    }
    execute() {
        return this.knight.jumpmove();
    }

}

module.exports = JumpMove;