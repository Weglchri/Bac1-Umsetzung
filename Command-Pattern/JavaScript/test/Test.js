var Command = require("./../src/Command");
var Controller = require("./../src/Controller");
var Knight = require("./../src/Knight");
var SwordSlash = require("./../src/SwordSlash");
var JumpMove = require("./../src/JumpMove");
var ShieldBlock = require("./../src/ShieldBlock");
var Logger = require("./../src/Logger");

//call node.js assert tool
var assert = require('assert');


describe('ConstructorTest', function () {

    describe('#ControllerTest', function () {
        it('test controller instantiation', function () {
            controller = new Controller();
            assert.deepEqual(new Controller(), controller);
        });
    });

    describe('#KnightTest', function () {
        it('test knight instantiation', function () {
            let knight = new Knight();
            assert.deepEqual(new Knight(), knight);
        });
    });

    describe('#CommandTest', function () {
        it('test command instantiation', function () {
            let command = new Command();
            assert.deepEqual(new Command(), command);
        });
    });

    describe('#JumpMoveTest', function () {
        it('test jumpmove instantiation', function () {
            let jumpmove = new JumpMove();
            assert.deepEqual(new JumpMove(), jumpmove);
        });
    });

    describe('#SwordSlashTest', function () {
        it('test swordslash instantiation', function () {
            let swordslash = new SwordSlash();
            assert.deepEqual(new SwordSlash(), swordslash);
        });
    });

    describe('#ShieldBlockTest', function () {
        it('test shieldblock instantiation', function () {
            let shieldblock = new ShieldBlock();
            assert.deepEqual(new ShieldBlock(), shieldblock);
        });
    });
    
    describe('#LoggerTest', function () {
        it('test logger instantiation', function () {
            let logger = new Logger();
            assert.deepEqual(new Logger(), logger);
        });
    });

});

describe('CommandChainTest', function () {

    let knight;
    let controller;
    let Button_A;
    let Button_B;
    let Button_C;

    before(function () {
        knight = new Knight();
        Button_A = new ShieldBlock(knight);
        Button_B = new SwordSlash(knight);
        Button_C = new JumpMove(knight);
        controller = new Controller();

    });

    describe('#ControllerTest', function () {
        it('test pressing controller buttons', function () {
            controller.press(Button_A); //press shieldblock mapped on ButtonA
            assert.equal("shieldblock", new Logger().lastLoggedItem());
            controller.press(Button_B); //press swordslash mapped on ButtonB
            assert.equal("swordslash", new Logger().lastLoggedItem());
            controller.press(Button_C); //press jumpmove mapped on ButtonC 
            assert.equal("jumpmove", new Logger().lastLoggedItem());
        });
    });



});
