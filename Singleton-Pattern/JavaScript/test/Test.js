var Logger = require("./../src/Logger");

//call node.js assert tool
var assert = require('assert');


describe('ConstructorTest', function () {

    let logger;
    let logger2;

    before(function (done) {
        logger = new Logger();
        setTimeout(function () {
            logger2 = new Logger();
            done();
        }, 1500);
    });

    describe('#SingletonTest', function () {
        it('test singleton instatiation', function () {
            assert.deepEqual(new Logger(), logger);
        });
    });

    describe('#SingletonTest', function () {
        it('comapare instances of logger', function () {
            assert.equal(logger, logger2);
        });
    });


    describe('#SingletonTest', function () {
        it('comapare time of both logger', function () {
            assert.equal(logger.time, logger2.time);
        });
    });

    describe('#SingletonMethodTest', function () {
        it('test logged text message', function () {
            logger.logItem("Fatal Error");
            assert.equal("Fatal Error", logger.logs[0]);
        });
    });

});