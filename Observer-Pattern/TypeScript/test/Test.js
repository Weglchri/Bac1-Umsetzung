"use strict";
exports.__esModule = true;
var Participant_1 = require("./../src/Participant");
var ObserverFactory_1 = require("./../src/ObserverFactory");
var Logger_1 = require("./../src/Logger");
var ValidationObserver_1 = require("./../src/ValidationObserver");
var NotificationObserver_1 = require("./../src/NotificationObserver");
var assert = require("assert");
describe('ConstructorTest', function () {
    var observerfactory;
    var validationobserver;
    var notificationobserver;
    before(function () {
        observerfactory = new ObserverFactory_1.ObserverFactory();
        validationobserver = new ValidationObserver_1.ValidationObserver();
        notificationobserver = new NotificationObserver_1.NotificationObserver();
    });
    describe('#FactoryTest', function () {
        it('test factory instatiation', function () {
            assert.deepEqual(new ObserverFactory_1.ObserverFactory(), observerfactory);
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
            var participant = new Participant_1.Participant(1, "Button");
            assert.deepEqual(new Participant_1.Participant(1, "Button"), participant);
        });
    });
    describe('#LoggerTest', function () {
        it('test logger instatiations', function () {
            var logger = Logger_1.Logger.getInstance();
            assert.deepEqual(Logger_1.Logger.getInstance(), logger);
        });
    });
});
describe('ParticipatorClassTest', function () {
    var participant;
    before(function () {
        participant = new Participant_1.Participant(1, "Button");
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
    var participant;
    var validationobserver;
    var notificationobserver;
    var observerfactory;
    var logger;
    before(function () {
        logger = Logger_1.Logger.getInstance();
        participant = new Participant_1.Participant(1, "Button");
        observerfactory = new ObserverFactory_1.ObserverFactory();
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
            var err = new Error("Name can't be undefined or null");
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
