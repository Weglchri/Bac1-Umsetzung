"use strict";
exports.__esModule = true;
var TableFactoryImpl_1 = require("./../src/TableFactoryImpl");
var User_1 = require("./../src/User");
var Group_1 = require("./../src/Group");
var TableType_1 = require("./../src/TableType");
var assert = require("assert");
describe('ConstructorTest', function () {
    var newfactory;
    describe('#FactoryTest', function () {
        it('test factory instantiaion', function () {
            newfactory = new TableFactoryImpl_1.TableFactoryImpl();
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), newfactory);
        });
    });
    describe('#UserTableTest', function () {
        it('test usertable instantiaion', function () {
            var usertable = newfactory.createTable(TableType_1.TableType.USERTABLE);
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), usertable);
        });
    });
    describe('#GroupTableTest', function () {
        it('test grouptable instantiaion', function () {
            var grouptable = newfactory.createTable(TableType_1.TableType.GROUPTABLE);
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), grouptable);
        });
    });
});
describe('UserClassTest', function () {
    var user;
    before(function () {
        user = new User_1.User("Weglchri15", "Christopher", 23, "Graz");
    });
    describe('#UserTest', function () {
        it('compare user id', function () {
            assert.equal("Weglchri15", user._id);
        });
    });
    describe('#UserTest', function () {
        it('compare user name', function () {
            assert.equal("Christopher", user.name);
        });
    });
    describe('#UserTest', function () {
        it('comapare user age', function () {
            assert.equal(23, user.age);
        });
    });
    describe('#UserTest', function () {
        it('compare user address', function () {
            assert.equal("Graz", user.address);
        });
    });
});
describe('GroupClassTest', function () {
    var group;
    var user;
    beforeEach(function () {
        group = new Group_1.Group("FH-Group");
        user = new User_1.User("Weglchri15", "Christopher", 23, "Graz");
    });
    describe('#GroupTest', function () {
        it('test group id', function () {
            assert.equal("FH-Group", group._id);
        });
    });
    describe('#GroupTest', function () {
        it('test group get users', function () {
            group.addUser(user);
            assert.equal(1, group.getUsers().length);
            assert.equal("Weglchri15", (group.getUsers()[0])._id);
        });
    });
    describe('#GroupTest', function () {
        it('test group delete user', function () {
            group.addUser(user);
            assert.equal(1, group.getUsers().length);
            group.deleteUser(user);
            assert.equal(0, group.getUsers().length);
        });
    });
    describe('#GroupTest', function () {
        it('test group size', function () {
            group.addUser(user);
            assert.equal(1, group.size);
        });
    });
});
