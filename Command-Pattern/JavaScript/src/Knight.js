var Logger = require("./Logger");

class Knight {

    constructor() {
        this.logger = new Logger();
    }

    //knight actor jump action
    jumpmove() {
        this.logger.logItem("jumpmove");
    }

    //knight actor sword action
    swordslash() {
        this.logger.logItem("swordslash");
    }

    //knight actor shield action
    shieldblock() {
        this.logger.logItem("shieldblock");
    }

}

module.exports = Knight;