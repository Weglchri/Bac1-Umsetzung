var TableFactory = require('./../src/TableFactory');
var GroupTable = require('./../src/GroupTable');
var UserTable = require('./../src/UserTable');
var Group = require("./../src/Group");
var User = require("./../src/User");

var assert = require('assert');


describe('ConstructorTest', function () {

    let newfactory;

    before(function () {
        newfactory = new TableFactory();
    });

    describe('#FactoryTest', function () {
        it('test factory instantiation', function () {
            assert.deepEqual(new TableFactory(), newfactory);
        });
    });

    describe('#UserTableTest', function () {
        it('test userTable creation', function () {
            let usertable = newfactory.createTable("UserTable");
            assert.deepEqual(new UserTable(), usertable);
        });
    });

    describe('#createGroupFactoryTest', function () {
        it('test groupTable creation', function () {
            let grouptable = newfactory.createTable("GroupTable");
            assert.deepEqual(new GroupTable(), grouptable);
        });
    });

});


describe('UserClassTest', function () {

    let user;

    before(function () {
        user = new User("Weglchri15", "Christopher", 23, "Graz");
    });

    describe('#UserTest', function () {
        it('comapare user id', function () {
            assert.equal("Weglchri15", user._id);
        });
    });

    describe('#UserTest', function () {
        it('compare user name', function () {
            assert.equal("Christopher", user.name);
        });
    });

    describe('#UserTest', function () {
        it('compare user age', function () {
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

    let group;
    let user;

    beforeEach(function () {
        group = new Group("FH-Group");
        user = new User("Weglchri15", "Christopher", 23, "Graz");
    });

    describe('#GroupTest', function () {
        it('compare group id', function () {
            assert.equal("FH-Group", group._id);
        });
    });

    describe('#GroupTest', function () {
        it('compare group size', function () {
            group.addUser(user);
            assert.equal(1, group.getUsers().length);
            assert.equal(group.getUsers().length, group.size);
            group.deleteUser(user);
            assert.equal(0, group.getUsers().length);
        });
    });

});


describe('UserTableTest', function () {

    let usertable;
    let user;
    let user2;

    beforeEach(function () {
        usertable = new UserTable();
        user = new User("Weglchri15", "Christopher", 23, "Graz");
        user2 = new User("HerbertKa2", "Herbert", 100, "Wien");
        usertable.insert(user);
        usertable.insert(user2);
    });

    afterEach(function () {
        usertable.deleteAll();
    });

    describe('#UserTableTest', function () {
        it('test find specific user in usertable', function (done) {
            setTimeout(function () {
                usertable.findByUsername(user, function (data) {
                    assert.deepEqual(user, data);
                    done();
                });
            }, 100);
        });
    });

    describe('#UserTableTest', function () {
        it('test find all users in database', function (done) {
            setTimeout(function () {
                usertable.findAll(function (data) {
                    assert.equal(2, data.length);
                    assert.equal("HerbertKa2", data[1]._id);
                    done();
                });
            }, 100);
        });
    });

    describe('#UserTableTest', function () {
        it('delete specific users in database', function (done) {
            usertable.delete(user);
            setTimeout(function () {
                usertable.findByUsername(user, function (data) {
                    assert.equal(null, data);
                    done();
                });
            }, 100);
        });
    });

});



describe('GroupTableTest', function () {

    let grouptable;
    let group;
    let group2;
    let user;
    let user2;

    beforeEach(function () {
        grouptable = new GroupTable();
        group = new Group("FH-Group");
        group2 = new Group("TU-Group");
        user = new User("Weglchri15", "Christopher", 23, "Graz");
        user2 = new User("Weglchri", "Christopher", 23, "Graz");
        group.addUser(user);
        grouptable.insert(group);
        grouptable.insert(group2);
    });

    afterEach(function () {
        grouptable.deleteAll();
    });

    describe('#GroupTable', function () {
        it('find specific group in database', function (done) {
            setTimeout(function () {
                grouptable.findByGroupname(group, function (data) {
                    assert.deepEqual(group, data);
                    done();
                });
            }, 100);
        });
    });

    describe('#GroupTable', function () {
        it('find all groups in database', function (done) {
            setTimeout(function () {
                grouptable.findAll(function (data) {
                    assert.equal(2, data.length);
                    done();
                });
            }, 100);
        });

    });

    describe('#GroupTable', function () {
        it('find user in group', function (done) {
            setTimeout(function () {
                grouptable.findAll(function (data) {
                    assert.equal(user._id, data[0].userlist[0]._id);
                    assert.equal(user.name, data[0].userlist[0].name);
                    done();
                });
            }, 200);
        });
    });

});
