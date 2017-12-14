var Logger = require("./Logger");

class Knight {

    constructor() {}

    //knight actor jump action
    jumpmove() {
        new Logger().logItem("jumpmove");
    }

    //knight actor sword action
    swordslash() {
        new Logger().logItem("swordslash");
    }

    //knight actor shield action
    shieldblock() {
        new Logger().logItem("shieldblock");
    }

}

module.exports = Knight;