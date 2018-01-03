var Subject = require("./../src/Subject");
var Component = require("./../src/Component");
var Observer = require("./../src/Observer");
var ObserverFactory = require("./../src/ObserverFactory");
var ObserverType = require("./../src/ObserverType");
var Logger = require("./../src/Logger");

var assert = require('assert');


describe('ConstructorTest', function () {

    let observerfactory;

    before(function () {
        observerfactory = new ObserverFactory();
    });


    describe('#FactoryTest', function () {
        it('test factory instatiation', function () {
            assert.deepEqual(new ObserverFactory(), observerfactory);
        });
    });

    describe('#ParticipantTest', function () {
        it('test participant instatiations', function () {
            let component = new Component();
            assert.deepEqual(new Component(), component);
        });
    });

    describe('#LoggerTest', function () {
        it('test logger instatiations', function () {
            let logger = new Logger();
            assert.deepEqual(new Logger(), logger);
        });
    });

});


describe('ParticipatorClassTest', function () {

    let component;

    before(function () {
        component = new Component(1, "Button");
    });

    describe('#ParticipatorTest', function () {
        it('compare participant values', function () {
            assert.equal(1, component.getId);
            assert.equal("Button", component.getName);
        });
    });

    describe('#ParticipatorTest', function () {
        it('compare changed participant values', function () {
            component.setId = null;
            assert.equal(null, component.getId);
        });
    });

});


describe('ObserverClassTest', function () {

    let component;
    let validationobserver;
    let notificationobserver;
    let observerfactory;
    let logger;

    before(function () {
        logger = new Logger();
        component = new Component(1, "Button");
        observerfactory = new ObserverFactory();
        validationobserver = observerfactory.createObserver(ObserverType.VALIDATION);
        notificationobserver = observerfactory.createObserver(ObserverType.NOTIFICATION);
        component.addObserver(validationobserver);
        component.addObserver(notificationobserver);
    });

    describe('#ObserverTest', function () {
        it('test participant observer list add', function () {
            assert.deepEqual(validationobserver, component.observers[0]);
            assert.deepEqual(notificationobserver, component.observers[1]);
        });
    });

    describe('#ObserverTest', function () {
        it('test participant observer list removal', function () {
            component.removeObserver(notificationobserver);
            assert.equal(1, component.observers.length);
            assert.deepEqual(validationobserver, component.observers[0]);
        });
    });

    describe('#ObserverTest', function () {
        it('test validationobserver successful', function () {
            component.setName = "Specific Button";
            assert.equal("Specific Button", component.getName);
            assert.equal("Correct input", logger.lastLoggedItem());
        });
    });

    describe('#ObserverTest', function () {
        it('test validationobserver failed', function () {
            component.setName = null;
            const err = new Error("Error: Name can't be undefined or null");
            assert.equal(err.message, logger.lastLoggedItem());
        });
    });

    describe('#ObserverTest', function () {
        it('test notificationobserver', function () {
            component.addObserver(notificationobserver);
            component.setName = "New html header";
        });
    });

});