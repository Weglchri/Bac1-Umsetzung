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
    
    print(msg) {
        console.log(msg);
    }
    
    log(msg) {
        this.logs.push(msg);
    }
}

module.exports = Logger;