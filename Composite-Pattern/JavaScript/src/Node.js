class Node {
    constructor() {
        if (this.constructor === Node) {
            throw new Error("Can't instantiate abstract class");
        }
    }
    addNode() {}
    getNode() {}
    getNumberOfFiles() {}
    getSize() {}
}

module.exports = Node;