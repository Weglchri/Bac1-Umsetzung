"use strict";
exports.__esModule = true;
var Component_1 = require("./../src/Component");
var ObserverFactory_1 = require("./../src/ObserverFactory");
var ObserverType_1 = require("./../src/ObserverType");
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
            assert.deepEqual(validationobserver, observerfactory.createObserver(ObserverType_1.ObserverType.VALIDATION));
            assert.deepEqual(notificationobserver, observerfactory.createObserver(ObserverType_1.ObserverType.NOTIFIACTION));
        });
    });
    describe('#ParticipantTest', function () {
        it('test participant instatiations', function () {
            var component = new Component_1.Component(1, "Button");
            assert.deepEqual(new Component_1.Component(1, "Button"), component);
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
    var component;
    before(function () {
        component = new Component_1.Component(1, "Button");
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
    var component;
    var validationobserver;
    var notificationobserver;
    var observerfactory;
    var logger;
    before(function () {
        logger = Logger_1.Logger.getInstance();
        component = new Component_1.Component(1, "Button");
        observerfactory = new ObserverFactory_1.ObserverFactory();
        validationobserver = observerfactory.createObserver(ObserverType_1.ObserverType.VALIDATION);
        notificationobserver = observerfactory.createObserver(ObserverType_1.ObserverType.NOTIFIACTION);
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
            var err = new Error("Name can't be undefined or null");
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
