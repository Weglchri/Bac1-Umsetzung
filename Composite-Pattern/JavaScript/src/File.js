var Node = require("./Node");

class File extends Node {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }

    getNumberOfFiles() {
        return 1;
    }

    getSize() {
        return this.size;
    }
}

module.exports = File;