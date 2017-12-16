import {Logger} from "./Logger"

export class Knight {

    logger:Logger = Logger.getInstance();
    
    constructor() {}

    //knight actor jump action
    jumpmove():void {
        this.logger.logItem("jumpmove");
    }

    //knight actor sword action
    swordslash():void {
        this.logger.logItem("swordslash");
    }

    //knight actor shield action
    shieldblock():void {
        this.logger.logItem("shieldblock");
    }

}
