import {AccountService} from "./../src/AccountService"
import {Person} from "./../src/Person"

//call node.js assert tool
var assert = require('assert');


describe('ConstructorTest', function () {

    let person:Person;
    
    describe('#PersonTest', function () {
        it('test person instatiation', function () {
            person = new Person("Christopher", 23, "valid", 5124, "no");
            assert.deepEqual(new Person("Christopher", 23, "valid", 5124, "no"), person);
        });
    });
    
    describe('#AccountServiceTest', function () {
        it('test accountservice instatiation', function () {
            let accountservice = new AccountService();
            assert.deepEqual(new AccountService(), accountservice);
        });
    });

});

describe('AccountServiceTest', function () {

    let accountservice:AccountService;
    let person1:Person;
    let person2:Person;
    let person3:Person;
    let person4:Person;
    
    const PERMITTED = true;
    const NOT_PERMITTED = false;

    before(function () {
        accountservice = new AccountService();
        person1 = new Person("Christopher", 23, "valid", 5124, "no"); //account deactivaded
        person2 = new Person("Jagura", 21, "valid", 12, "no"); //passes
        person3 = new Person("Merson",15,"", 41, "no"); //empty account field
        person4 = new Person("Caitlyn", 18, "valid", 1000, "yes"); //already has an insurance
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
        it('test insurance permission person1', async function () {
            let permission = await accountservice.checkPersonInsuranceClaim(person1);
            assert.equal(PERMITTED, permission);
        });
    });

    describe('#AccountsServiceTest', function () {
        it('test insurance permission person2', async function () {
            let permission = await accountservice.checkPersonInsuranceClaim(person2);
            assert.equal(PERMITTED, permission);
        });
    });

    describe('#AccountsServiceTest', function () {
        it('test insurance permission person3', async function () {
            let permission = await accountservice.checkPersonInsuranceClaim(person3);
            assert.equal(NOT_PERMITTED, permission);
        });
    });

    describe('#AccountsServiceTest', function () {
        it('test insurance permission person4', async function () {
            let permission = await accountservice.checkPersonInsuranceClaim(person4);
            assert.equal(NOT_PERMITTED, permission);
        });
    });

});