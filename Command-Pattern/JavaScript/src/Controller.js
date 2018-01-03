class Controller {
    
    constructor() {}
    
    press(command) {
    	command.execute();
    }       
}
 
module.exports = Controller;