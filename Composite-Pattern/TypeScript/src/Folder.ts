import {Node} from "./Node"

export class Folder extends Node {
    
    name:string;
    nodes:Node[] = new Array<Node>();
    
    constructor(name:string) {
        super();
        this.name = name;
    }

    addNode(node:Node):void {
        if (node) {
            this.nodes.push(node);
        }
    }

    getNodes():Node[] {
        return this.nodes;
    }

    getNumberOfFiles():number {
        let number = 0;
        for (let node of this.nodes) {
            number += node.getNumberOfFiles(); 
        }
        return number;
    }
    
    getSize():number {
        let size = 0;
        for (let node of this.nodes) {
            size += node.getSize();
        }
        return size;
    }
    
    
}
