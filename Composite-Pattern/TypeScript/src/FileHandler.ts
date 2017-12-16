import {Node} from "./Node"

export class FileHandler {

    constructor() {}

    find(filename:string, callback:any):Node {
        throw new Error("Unsupported operation");
    }

    findAll(callback:any):Node[] {
        throw new Error("Unsupported operation");
    }

    insert(node:Node):void {}

    delete(node:Node):void {}

    deleteAll():void {}
    
}
