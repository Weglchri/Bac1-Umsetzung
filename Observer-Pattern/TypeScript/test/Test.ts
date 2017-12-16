import {Participant} from "./../src/Participant"
import {Observer} from "./../src/Observer"
import {ObserverFactory} from "./../src/ObserverFactory"
import {Logger} from "./../src/Logger"
import {ValidationObserver} from "./../src/ValidationObserver"
import {NotificationObserver} from "./../src/NotificationObserver"


import mocha = require('mocha');
import assert = require('assert');


describe('ConstructorTest', function () {

    let observerfactory:ObserverFactory;
    let validationobserver:Observer;
    let notificationobserver:Observer;


    before(function () {
        observerfactory = new ObserverFactory();
        validationobserver = new ValidationObserver();
        notificationobserver = new NotificationObserver();
    });


    describe('#FactoryTest', function () {
        it('test factory instatiation', function () {
            assert.deepEqual(new ObserverFactory(), observerfactory);
        });
    });

    describe('#ObserverTest', function () {
        it('test observer instatiations', function () {
            assert.deepEqual(validationobserver, observerfactory.createObserver("validation"));
            assert.deepEqual(notificationobserver, observerfactory.createObserver("notification"));
        });
    });

    describe('#ParticipantTest', function () {
        it('test participant instatiations', function () {
            let participant = new Participant(1, "Button");
            assert.deepEqual(new Participant(1, "Button"), participant);
        });
    });

    describe('#LoggerTest', function () {
        it('test logger instatiations', function () {
            let logger = Logger.getInstance();
            assert.deepEqual(Logger.getInstance(), logger);
        });
    });

});


describe('ParticipatorClassTest', function () {

    let participant:Participant;

    before(function () {
        participant = new Participant(1, "Button");
    });

    describe('#ParticipatorTest', function () {
        it('compare participant values', function () {
            assert.equal(1, participant.id);
            assert.equal("Button", participant.name);
        });
    });

    describe('#ParticipatorTest', function () {
        it('compare changed participant values', function () {
            participant.setId = null;
            assert.equal(1, participant.id);
        });
    });

});


describe('ObserverClassTest', function () {

    let participant:Participant;
    let validationobserver:Observer;
    let notificationobserver:Observer;
    let observerfactory:ObserverFactory;
    let logger:Logger;

    before(function () {
        logger = Logger.getInstance();
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
            const err = new Error("Name can't be undefined or null");
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