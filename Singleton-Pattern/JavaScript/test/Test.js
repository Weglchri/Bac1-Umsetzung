var Logger = require("./../src/Logger");

//call node.js assert tool
var assert = require('assert');


describe('SingletonTest', function () {

    let logger;
    let logger2;

    before(function (done) {
        logger = new Logger();
        setTimeout(function () {
            logger2 = new Logger();
            done();
        }, 1500);
    });

    describe('#createSingletonInstance', function () {
        it('should be an instance of Logger', function () {
            assert.deepEqual(new Logger(), logger);
        });
    });

    describe('#compareLogger', function () {
        it('check if its the same instance', function () {
            assert.equal(logger, logger2);
        });
    });

    describe('#compareLogger', function () {
        it('check if its the same instance', function () {
            assert.equal(logger.time, logger2.time);
        });
    });

    describe('#testConsoleLog', function () {
        it('check method print of logger', function () {
            assert.equal("Done", logger.print("Done"));
        });
    });

    describe('#testConsoleErrorLog', function () {
        it('check method printError of logger', function () {
            const err = new Error("Fatal error");
            assert.deepEqual(err.message, logger.printError("Fatal error"));
        });
    });

});