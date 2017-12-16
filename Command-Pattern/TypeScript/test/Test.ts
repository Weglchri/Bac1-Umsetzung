import {Command} from "./../src/Command"
import {Controller} from "./../src/Controller"
import {Knight} from "./../src/Knight"
import {SwordSlash} from "./../src/SwordSlash"
import {JumpMove} from "./../src/JumpMove"
import {ShieldBlock} from "./../src/ShieldBlock"
import {Logger} from "./../src/Logger"


//call node.js assert tool
import assert = require('assert');


describe('ConstructorTest', function () {

    let knight:Knight;
    let logger:Logger;
    
    before(function(){
        knight = new Knight();
        logger = Logger.getInstance();
    });
    
    describe('#ControllerTest', function () {
        it('test controller instantiation', function () {
            let controller = new Controller();
            assert.deepEqual(new Controller(), controller);
        });
    });

    describe('#KnightTest', function () {
        it('test knight instantiation', function () {
            assert.deepEqual(new Knight(), knight);
        });
    });

    describe('#JumpMoveTest', function () {
        it('test jumpmove instantiation', function () {
            let knight = new Knight();
            let jumpmove = new JumpMove(knight);
            assert.deepEqual(new JumpMove(knight), jumpmove);
        });
    });

    describe('#SwordSlashTest', function () {
        it('test swordslash instantiation', function () {
            let knight = new Knight();
            let swordslash = new SwordSlash(knight);
            assert.deepEqual(new SwordSlash(knight), swordslash);
        });
    });

    describe('#ShieldBlockTest', function () {
        it('test shieldblock instantiation', function () {
            let shieldblock = new ShieldBlock(knight);
            assert.deepEqual(new ShieldBlock(knight), shieldblock);
        });
    });
    
    describe('#LoggerTest', function () {
        it('test logger instantiation', function () {
            assert.deepEqual(Logger.getInstance(), logger);
        });
    });

});

describe('CommandChainTest', function () {

    let knight:Knight;
    let controller:Controller;
    let Button_A:Command;
    let Button_B:Command;
    let Button_C:Command;
    let logger:Logger;
    
    before(function () {
        knight = new Knight();
        Button_A = new ShieldBlock(knight);
        Button_B = new SwordSlash(knight);
        Button_C = new JumpMove(knight);
        controller = new Controller();
        logger = Logger.getInstance();

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


