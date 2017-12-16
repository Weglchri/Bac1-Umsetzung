"use strict";
exports.__esModule = true;
var Controller_1 = require("./../src/Controller");
var Knight_1 = require("./../src/Knight");
var SwordSlash_1 = require("./../src/SwordSlash");
var JumpMove_1 = require("./../src/JumpMove");
var ShieldBlock_1 = require("./../src/ShieldBlock");
var Logger_1 = require("./../src/Logger");
//call node.js assert tool
var assert = require("assert");
describe('ConstructorTest', function () {
    var knight;
    var logger;
    before(function () {
        knight = new Knight_1.Knight();
        logger = Logger_1.Logger.getInstance();
    });
    describe('#ControllerTest', function () {
        it('test controller instantiation', function () {
            var controller = new Controller_1.Controller();
            assert.deepEqual(new Controller_1.Controller(), controller);
        });
    });
    describe('#KnightTest', function () {
        it('test knight instantiation', function () {
            assert.deepEqual(new Knight_1.Knight(), knight);
        });
    });
    describe('#JumpMoveTest', function () {
        it('test jumpmove instantiation', function () {
            var knight = new Knight_1.Knight();
            var jumpmove = new JumpMove_1.JumpMove(knight);
            assert.deepEqual(new JumpMove_1.JumpMove(knight), jumpmove);
        });
    });
    describe('#SwordSlashTest', function () {
        it('test swordslash instantiation', function () {
            var knight = new Knight_1.Knight();
            var swordslash = new SwordSlash_1.SwordSlash(knight);
            assert.deepEqual(new SwordSlash_1.SwordSlash(knight), swordslash);
        });
    });
    describe('#ShieldBlockTest', function () {
        it('test shieldblock instantiation', function () {
            var shieldblock = new ShieldBlock_1.ShieldBlock(knight);
            assert.deepEqual(new ShieldBlock_1.ShieldBlock(knight), shieldblock);
        });
    });
    describe('#LoggerTest', function () {
        it('test logger instantiation', function () {
            assert.deepEqual(Logger_1.Logger.getInstance(), logger);
        });
    });
});
describe('CommandChainTest', function () {
    var knight;
    var controller;
    var Button_A;
    var Button_B;
    var Button_C;
    var logger;
    before(function () {
        knight = new Knight_1.Knight();
        Button_A = new ShieldBlock_1.ShieldBlock(knight);
        Button_B = new SwordSlash_1.SwordSlash(knight);
        Button_C = new JumpMove_1.JumpMove(knight);
        controller = new Controller_1.Controller();
        logger = Logger_1.Logger.getInstance();
    });
    describe('#ControllerTest', function () {
        it('test pressing controller buttons', function () {
            controller.press(Button_A); //press shieldblock mapped on ButtonA
            assert.equal("shieldblock", logger.lastLoggedItem());
            controller.press(Button_B); //press swordslash mapped on ButtonB
            assert.equal("swordslash", logger.lastLoggedItem());
            controller.press(Button_C); //press jumpmove mapped on ButtonC 
            assert.equal("jumpmove", logger.lastLoggedItem());
        });
    });
});
