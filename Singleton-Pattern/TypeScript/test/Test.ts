import { Logger } from "./../src/Logger"

import mocha = require('mocha');
import assert = require('assert');
//call node.js assert tool


describe('ConstructorTest', function () {

    let logger:Logger;
    let logger2:Logger;
    
    before(function (done) {
        logger = Logger.getInstance();
        setTimeout(function () {
            logger2 = Logger.getInstance();
            done();
        }, 1500);
    });
    
    describe('#SingletonTest', function () {
        it('test singleton instatiation', function () {
            assert.deepEqual(Logger.getInstance(), logger);
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