import {Node} from "./Node"

export class File extends Node {
    
    name:string;
    size:number;
    
    constructor(name:string, size:number) {
        super();
        this.name = name;
        this.size = size;
    }

    getNumberOfFiles():number {
        return 1;
    }

    getSize():number {
        return this.size;
    }
}
