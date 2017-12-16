export abstract class Node {
    constructor() {}
    addNode(node:Node):void {
        throw new Error("Unsuported operatione");
    }
    getNodes():Node[] {
        throw new Error("Unsuported operatione");
    }
    getNumberOfFiles():number {
        throw new Error("Unsuported operatione");
    }
    getSize():number {
        throw new Error("Unsuported operatione");
    }
}
