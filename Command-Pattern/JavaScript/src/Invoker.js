class Invoker {
    
    constructor(command) {
        this.command = command;
    }
    
    execute() {
        this.command.execute();
    }   
}
 
module.exports = Invoker;