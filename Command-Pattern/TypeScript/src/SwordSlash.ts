import {Command} from "./Command"
import {Knight} from "./Knight"

export class SwordSlash implements Command {
    
    knight:Knight
    
    constructor(knight:Knight) {
        this.knight = knight;
    }
    
    execute():void {
        this.knight.swordslash();
    }
}

