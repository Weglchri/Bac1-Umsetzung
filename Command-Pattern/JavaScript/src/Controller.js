class Controller {
    
    constructor() {}
    
    press(command) {
        return command.execute();
    }       
}
 
module.exports = Controller;