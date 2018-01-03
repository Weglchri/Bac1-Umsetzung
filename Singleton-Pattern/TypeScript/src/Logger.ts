export class Logger {

    private static INSTANCE:Logger = new Logger();
    private static logs: string[] = new Array<string>();
    private static date = new Date();
    
    private constructor() {}
 
    public static getInstance():Logger {
        return Logger.INSTANCE;
    }
    
    getCreationDate():Date {
        return Logger.date;
    }
    
    printMessage(msg:string):void {
        console.log(msg);
    }

    logItem(msg:string):void {
        Logger.logs.push(msg);
    }

    lastLoggedItem() {
        return Logger.logs[Logger.logs.length - 1];
    }

    throwError(msg:string) {
        const err = new Error(msg);
        this.logItem(err.message);
        console.log(err);
    }

}
