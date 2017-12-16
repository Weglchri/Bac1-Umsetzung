export class Logger {

    private static instance: Logger;
    private static logs: string[] = new Array<string>();
    private static date = new Date();
    
    private constructor() {}
 
    public static getInstance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new Logger();
        }
        return this.instance;
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
