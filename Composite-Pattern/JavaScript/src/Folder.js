var Node = require("./Node");

class Folder extends Node {
    constructor(name) {
        super();
        this.name = name;
        this.nodes = [];
    }

    addNode(node) {
        if (node instanceof Node) {
            this.nodes.push(node);
        } else {
            throw new Error("Can't insert, not a node type");
        }
    }

    getNodes() {
        return this.nodes;
    }

    getNumberOfFiles() {
        let number = 0;
        for (let node of this.nodes) {
            number += node.getNumberOfFiles(); 
        }
        return number;
    }
    
    getSize() {
        let size = 0;
        for (let node of this.nodes) {
            size += node.getSize();
        }
        return size;
    }
    
    
}

module.exports = Folder;