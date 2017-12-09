"use strict";
exports.__esModule = true;
var TableFactoryImpl_1 = require("./../src/TableFactoryImpl");
var User_1 = require("./../src/User");
var Group_1 = require("./../src/Group");
var assert = require("assert");
describe('FactoryTest', function () {
    var newfactory;
    describe('#createFactoryTest', function () {
        it('default factory should be an instance of TableFactory', function () {
            newfactory = new TableFactoryImpl_1.TableFactoryImpl();
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), newfactory);
        });
    });
    describe('#createUserFactoryTest', function () {
        it('user factory should be an instance of TableFactory', function () {
            var userfactory = newfactory.createTable("UserTable");
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), userfactory);
        });
    });
    describe('#createGroupFactoryTest', function () {
        it('group factory should be an instance of TableFactory', function () {
            var groupfactory = newfactory.createTable("GroupTable");
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), groupfactory);
        });
    });
});
describe('UserTest', function () {
    var user;
    before(function () {
        user = new User_1.User("Weglchri15", "Christopher", 23, "Graz");
    });
    describe('#userIdTest', function () {
        it('user id matching', function () {
            assert.equal("Weglchri15", user._id);
        });
    });
    describe('#userNameTest', function () {
        it('user name matching', function () {
            assert.equal("Christopher", user.name);
        });
    });
    describe('#userAgeTest', function () {
        it('user age matching', function () {
            assert.equal(23, user.age);
        });
    });
    describe('#userAddressTest', function () {
        it('user address matching', function () {
            assert.equal("Graz", user.address);
        });
    });
});
describe('GroupTest', function () {
    var group;
    var user;
    beforeEach(function () {
        group = new Group_1.Group("FH-Group");
        user = new User_1.User("Weglchri15", "Christopher", 23, "Graz");
    });
    describe('#groupIdTest', function () {
        it('group id matching', function () {
            assert.equal("FH-Group", group._id);
        });
    });
    describe('#groupUserAddTest', function () {
        it('group user add', function () {
            group.adduser(user);
            assert.equal(1, group.getusers().length);
            assert.equal("Weglchri15", (group.getusers()[0])._id);
        });
    });
    describe('#groupUserDeleteTest', function () {
        it('group user delete', function () {
            group.adduser(user);
            assert.equal(1, group.getusers().length);
            group.deleteuser(user);
            assert.equal(0, group.getusers().length);
        });
    });
    describe('#groupSizeTest', function () {
        it('group size matching', function () {
            group.adduser(user);
            assert.equal(1, group.size);
        });
    });
});
