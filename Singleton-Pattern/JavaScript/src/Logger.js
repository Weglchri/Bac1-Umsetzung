
let instance = null;

class Logger {
    constructor() {
        if(!instance){
            instance = this;
        }
        this.time = new Date();
        return instance;
    }  
    
    print(msg) {
        console.log(msg);
        return msg;
    }
    
    printError(msg) {
        console.log(new Error(msg));
        return msg;
    }
}

module.exports = Logger;