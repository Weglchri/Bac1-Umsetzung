import {Component} from "./../src/Component"
import {Observer} from "./../src/Observer"
import {ObserverFactory} from "./../src/ObserverFactory"
import {ObserverType} from "./../src/ObserverType"
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
            assert.deepEqual(validationobserver, observerfactory.createObserver(ObserverType.VALIDATION));
            assert.deepEqual(notificationobserver, observerfactory.createObserver(ObserverType.NOTIFIACTION));
        });
    });

    describe('#ParticipantTest', function () {
        it('test participant instatiations', function () {
            let component = new Component(1, "Button");
            assert.deepEqual(new Component(1, "Button"), component);
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

    let component:Component;

    before(function () {
        component = new Component(1, "Button");
    });

    describe('#ParticipatorTest', function () {
        it('compare participant values', function () {
            assert.equal(1, component.id);
            assert.equal("Button", component.name);
        });
    });

    describe('#ParticipatorTest', function () {
        it('compare changed participant values', function () {
            component.setId = null;
            assert.equal(1, component.id);
        });
    });

});


describe('ObserverClassTest', function () {

    let component:Component;
    let validationobserver:Observer;
    let notificationobserver:Observer;
    let observerfactory:ObserverFactory;
    let logger:Logger;

    before(function () {
        logger = Logger.getInstance();
        component = new Component(1, "Button");
        observerfactory = new ObserverFactory();
        validationobserver = observerfactory.createObserver(ObserverType.VALIDATION);
        notificationobserver = observerfactory.createObserver(ObserverType.NOTIFIACTION);
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
            component.setName("Specific Button");
            assert.equal("Specific Button", component.name);
            assert.equal("Correct input", logger.lastLoggedItem());
        });
    });

    describe('#ObserverTest', function () {
        it('test validationobserver failed', function () {
            component.setName(null);
            const err = new Error("Name can't be undefined or null");
            assert.equal(err.message, logger.lastLoggedItem());
        });
    });

    describe('#ObserverTest', function () {
        it('test notificationobserver', function () {
            component.addObserver(notificationobserver);
            component.setName("New html header");
        });
    });

});