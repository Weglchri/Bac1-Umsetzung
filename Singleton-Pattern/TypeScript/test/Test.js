"use strict";
exports.__esModule = true;
var Logger_1 = require("./../src/Logger");
var assert = require("assert");
//call node.js assert tool
describe('ConstructorTest', function () {
    var logger;
    var logger2;
    before(function (done) {
        logger = Logger_1.Logger.getInstance();
        setTimeout(function () {
            logger2 = Logger_1.Logger.getInstance();
            done();
        }, 1500);
    });
    describe('#SingletonTest', function () {
        it('test singleton instatiation', function () {
            assert.deepEqual(Logger_1.Logger.getInstance(), logger);
        });
    });
    describe('#SingletonTest', function () {
        it('comapare instances of logger', function () {
            assert.deepEqual(logger, logger2);
        });
    });
    describe('#SingletonTest', function () {
        it('comapare time of both logger', function () {
            assert.equal(logger.getCreationDate(), logger2.getCreationDate());
        });
    });
    describe('#SingletonMethodTest', function () {
        it('test logged text message', function () {
            logger.logItem("Fatal Error");
            logger.logItem("Warning");
            assert.equal("Warning", logger.lastLoggedItem());
        });
    });
});
