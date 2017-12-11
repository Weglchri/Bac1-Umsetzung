class Logger {
    constructor() {}
    printProcessed(msg) {
        console.log("Processed data: " + msg);
    }
    printUnprocessed(msg) {
        console.log("unprocessed data: " + msg);
    }
}

module.exports = Logger;