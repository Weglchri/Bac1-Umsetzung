var Subject = require("./../src/Subject");
var Participant = require("./../src/Participant");
var Observer = require("./../src/Observer");
var ObserverFactory = require("./../src/ObserverFactory");

//call node.js assert tool
var assert = require('assert');


describe('FactoryTest', function () {

    let validationobserver;
    let notificationobserver;
    let observerfactory;

    before(function () {
        observerfactory = new ObserverFactory();
        validationobserver = observerfactory.createObserver("validation");
        notificationobserver = observerfactory.createObserver("notification");
    });

    describe('#createFactoryTest', function () {
        it('default factory should be an instance of ObserverFactory', function () {
            assert.deepEqual(new ObserverFactory(), observerfactory);
        });
    });

    describe('#createObserverTest', function () {
        it('observer-types should be an instance of Observer', function () {
            assert.deepEqual(new Observer(), validationobserver);
            assert.deepEqual(new Observer(), notificationobserver);
        });
    });

});


describe('ParticipatorTest', function () {

    let participaton;

    before(function () {
        participaton = new Participant(1, "Button");
    });

    describe('#createParticipantTest', function () {
        it('check values of participant', function () {
            assert.equal(1, participaton.id);
            assert.equal("Button", participaton.name);
        });
    });

});


describe('ParticipatorTest', function () {

    let participant;
    let validationobserver;
    let notificationobserver;
    let observerfactory;

    before(function () {
        participant = new Participant(1, "Button");
        observerfactory = new ObserverFactory();
        validationobserver = observerfactory.createObserver("validation");
        notificationobserver = observerfactory.createObserver("notification");
        participant.addObserver(validationobserver);
        participant.addObserver(notificationobserver);
    });

    describe('#createParticipantTest', function () {
        it('check values of participant', function () {
            assert.equal(1, participant.id);
            assert.equal("Button", participant.name);
        });
    });

    describe('#addObserverTest', function () {
        it('check if observer gets added', function () {
            assert.deepEqual(validationobserver, participant.observers[0]);
            assert.deepEqual(notificationobserver, participant.observers[1]);
        });
    });

    describe('#addObserverTest', function () {
        it('check if observer gets removed', function () {
            participant.removeObserver(notificationobserver);
            assert.equal(1, participant.observers.length);
            assert.deepEqual(validationobserver, participant.observers[0]);
        });
    });

});