import {Command} from "./Command"

export class Controller {
    
    constructor() {}
    
    press(command:Command):void {
        command.execute();
    }       
}
 
