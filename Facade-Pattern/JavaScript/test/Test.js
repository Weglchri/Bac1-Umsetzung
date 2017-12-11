var AccountService = require("./../src/AccountService");
var Person = require("./../src/Person");

//call node.js assert tool
var assert = require('assert');


describe('AccountServiceTest', function () {

    let accountservice;
    let person1;
    let person2;

    before(function () {
        accountservice = new AccountService();
        person1 = new Person("Christopher", 23, "invalid", 5124, false);
        person2 = new Person("Jagura", 21, "valid", 0, false);
    });

    describe('#checkPersonData', function () {
        it('person data check', function () {
            assert.equal("Christopher", person1.name);
            assert.equal(23, person1.age);
            assert.equal("invalid", person1.account);
            assert.equal(5124, person1.transactions);
            assert.equal(false, person1.insurance);
        });
    });

    describe('#createWorkforceService', function () {
        it('default service should be an instance of WorkforceService', function () {
            assert.deepEqual(new AccountService(), accountservice);
        });
    });

    describe('#checkInsuranceclaimPerson1', function () {
        it('permission to get an insurance should be false', function () {
            let permission = accountservice.checkPersonInsuranceClaim(person1);
            assert.equal(false, permission);
        });
    });
    
    describe('#checkInsuranceclaimPerson2', function () {
        it('permission to get an insurance should be true', function () {
            let permission = accountservice.checkPersonInsuranceClaim(person2);
            assert.equal(true, permission);
        });
    });

});