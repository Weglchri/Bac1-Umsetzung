var Logger = require("./Logger");

class Knight {

    constructor() {}

    //knight actor jump action
    jumpmove() {
        new Logger().print("jumpmove");
        new Logger().log("jumpmove");
    }

    //knight actor sword action
    swordslash() {
        new Logger().print("swordslash");
        new Logger().log("swordslash");
    }

    //knight actor shield action
    shieldblock() {
        new Logger().print("shieldblock");
        new Logger().log("shieldblock");
    }

}

module.exports = Knight;