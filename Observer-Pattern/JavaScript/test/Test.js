var Subject = require("./../src/Subject");
var Participant = require("./../src/Participant");
var Observer = require("./../src/Observer");
var ObserverFactory = require("./../src/ObserverFactory");
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

    describe('#ObserverTest', function () {
        it('test observer instatiations', function () {
            assert.deepEqual(new Observer(), observerfactory.createObserver("validation"));
            assert.deepEqual(new Observer(), observerfactory.createObserver("notification"));
        });
    });

    describe('#ParticipantTest', function () {
        it('test participant instatiations', function () {
            let participant = new Participant();
            assert.deepEqual(new Participant(), participant);
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

    let participator;

    before(function () {
        participator = new Participant(1, "Button");
    });

    describe('#ParticipatorTest', function () {
        it('compare participant values', function () {
            assert.equal(1, participator.id);
            assert.equal("Button", participator.name);
        });
    });

    describe('#ParticipatorTest', function () {
        it('compare changed participant values', function () {
            participator.setId = null;
            assert.equal(1, participator.id);
        });
    });

});


describe('ObserverClassTest', function () {

    let participant;
    let validationobserver;
    let notificationobserver;
    let observerfactory;
    let logger;

    before(function () {
        logger = new Logger();
        participant = new Participant(1, "Button");
        observerfactory = new ObserverFactory();
        validationobserver = observerfactory.createObserver("validation");
        notificationobserver = observerfactory.createObserver("notification");
        participant.addObserver(validationobserver);
        participant.addObserver(notificationobserver);
    });

    describe('#ObserverTest', function () {
        it('test participant observer list add', function () {
            assert.deepEqual(validationobserver, participant.observers[0]);
            assert.deepEqual(notificationobserver, participant.observers[1]);
        });
    });

    describe('#ObserverTest', function () {
        it('test participant observer list removal', function () {
            participant.removeObserver(notificationobserver);
            assert.equal(1, participant.observers.length);
            assert.deepEqual(validationobserver, participant.observers[0]);
        });
    });

    describe('#ObserverTest', function () {
        it('test validationobserver successful', function () {
            participant.setName("Specific Button");
            assert.equal("Specific Button", participant.name);
            assert.equal("Correct input", logger.lastLoggedItem());
        });
    });

    describe('#ObserverTest', function () {
        it('test validationobserver failed', function () {
            participant.setName(null);
            const err = new Error("Error: Name can't be undefined or null");
            assert.equal(err.message, logger.lastLoggedItem());
        });
    });

    describe('#ObserverTest', function () {
        it('test notificationobserver', function () {
            participant.addObserver(notificationobserver);
            participant.setName("New html header");
        });
    });

});