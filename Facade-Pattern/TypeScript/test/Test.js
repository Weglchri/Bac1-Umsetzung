"use strict";
exports.__esModule = true;
var AccountService_1 = require("./../src/AccountService");
var Person_1 = require("./../src/Person");
//call node.js assert tool
var assert = require('assert');
describe('ConstructorTest', function () {
    var person;
    describe('#PersonTest', function () {
        it('test person instatiation', function () {
            person = new Person_1.Person("Christopher", 23, "valid", 5124, "no");
            assert.deepEqual(new Person_1.Person("Christopher", 23, "valid", 5124, "no"), person);
        });
    });
    describe('#AccountServiceTest', function () {
        it('test accountservice instatiation', function () {
            var accountservice = new AccountService_1.AccountService();
            assert.deepEqual(new AccountService_1.AccountService(), accountservice);
        });
    });
});
describe('AccountServiceTest', function () {
    var accountservice;
    var person1;
    var person2;
    var person3;
    var person4;
    var PERMITTED = true;
    var NOT_PERMITTED = false;
    before(function () {
        accountservice = new AccountService_1.AccountService();
        person1 = new Person_1.Person("Christopher", 23, "valid", 5124, "no"); //account deactivaded
        person2 = new Person_1.Person("Jagura", 21, "valid", 12, "no"); //passes
        person3 = new Person_1.Person("Merson", 15, "", 41, "no"); //empty account field
        person4 = new Person_1.Person("Caitlyn", 18, "valid", 1000, "yes"); //already has an insurance
    });
    describe('#PersonTest', function () {
        it('compare person data', function () {
            assert.equal("Christopher", person1.name);
            assert.equal(23, person1.age);
            assert.equal("valid", person1.account);
            assert.equal(5124, person1.transactions);
            assert.equal("no", person1.insurance);
        });
    });
    describe('#AccountServiceTest', function () {
        it('test insurance permission person1', function () {
            var permission = accountservice.checkPersonInsuranceClaim(person1);
            assert.equal(PERMITTED, permission);
        });
    });
    describe('#AccountsServiceTest', function () {
        it('test insurance permission person2', function () {
            var permission = accountservice.checkPersonInsuranceClaim(person2);
            assert.equal(PERMITTED, permission);
        });
    });
    describe('#AccountsServiceTest', function () {
        it('test insurance permission person3', function () {
            var permission = accountservice.checkPersonInsuranceClaim(person3);
            assert.equal(NOT_PERMITTED, permission);
        });
    });
    describe('#AccountsServiceTest', function () {
        it('test insurance permission person4', function () {
            var permission = accountservice.checkPersonInsuranceClaim(person4);
            assert.equal(NOT_PERMITTED, permission);
        });
    });
});
