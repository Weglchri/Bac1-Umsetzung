let instance = null;

class Logger {
    constructor() {
        if(!instance){
            instance = this;
        }
        this.logs = [];
        this.time = new Date();
        return instance;
    }  
    
     printMessage(msg) {
        console.log(msg);
    }
    
    logItem(msg) {
        this.logs.push(msg);   
    }
    
    lastLoggedItem() {
        return this.logs[this.logs.length-1];
    }
    
    throwError(msg) {
        const err = new Error(msg);
        this.logItem(err);
        console.log(err.message);
    }
    
}

module.exports = Logger;