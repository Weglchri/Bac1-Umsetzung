var TableFactory = require('./../src/TableFactory');
var GroupTable = require('./../src/GroupTable');
var UserTable = require('./../src/UserTable');
var Group = require("./../src/Group");
var User = require("./../src/User");

var assert = require('assert');


describe('FactoryTest', function () {

    let newfactory;

    before(function () {
        newfactory = new TableFactory();
    });

    describe('#createFactoryTest', function () {
        it('default factory should be an instance of TableFactory', function () {
            assert.deepEqual(new TableFactory(), newfactory);
        });
    });

    describe('#createUserFactoryTest', function () {
        it('user factory should be an instance of TableFactory', function () {
            let userfactory = newfactory.createTable("UserTable");
            assert.deepEqual(new TableFactory(), userfactory);
        });
    });

    describe('#createGroupFactoryTest', function () {
        it('group factory should be an instance of TableFactory', function () {
            let groupfactory = newfactory.createTable("GroupTable");
            assert.deepEqual(new TableFactory(), groupfactory);
        });
    });

});


describe('UserTest', function () {

    let user;

    before(function () {
        user = new User("Weglchri15", "Christopher", 23, "Graz");
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

    let group;
    let user;

    beforeEach(function () {
        group = new Group("FH-Group");
        user = new User("Weglchri15", "Christopher", 23, "Graz");
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


describe('UserTableTest', function () {

    let usertable;
    let user;
    let user2;

    before(function () {
        usertable = new UserTable();
        user = new User("Weglchri15", "Christopher", 23, "Graz");
        user2 = new User("Weglchri", "Christopher", 23, "Graz");
        usertable.insert(user);
        usertable.insert(user2);
    });

    describe('#findUserTableTest', function () {
        it('find user in usertable', function (done) {
            usertable.findbyusername(user, function (data) {
                assert.deepEqual(user, data);
                done();
            });

        });
    });

    describe('#findAllUserTableTest', function () {
        it('find all users in usertable', function (done) {
            usertable.findAll(function (data) {
                assert.equal(2, data.length);
                assert.equal("Weglchri", data[1]._id);
                done();
            });
        });
    });

});



describe('GroupTableTest', function () {

    let grouptable;
    let group;
    let group2;
    let user;
    let user2;

    before(function () {
        grouptable = new GroupTable();
        group = new Group("FH-Group");
        group2 = new Group("TU-Group");
        user = new User("Weglchri15", "Christopher", 23, "Graz");
        user2 = new User("Weglchri", "Christopher", 23, "Graz");
        group.adduser(user);
        grouptable.insert(group);
        grouptable.insert(group2);
    });

    describe('#findGroupTableTest', function () {
        it('find group in grouptable', function (done) {
            grouptable.findbygroupname(group, function (data) {
                assert.deepEqual(group, data);
                done();
            });

        });
    });

    describe('#findGroupTableTest', function () {
        it('find grou with id', function (done) {
            grouptable.findAll(function (data) {
                assert.equal("TU-Group", data[1]._id);
                done();
            });
        });
    });

    describe('#findUsersGroupTest', function () {
        it('check user in group', function (done) {
            grouptable.findAll(function (data) {
                assert.equal("FH-Group", data[0]._id);
                console.log(data.users);
                assert.deepEqual(user, data[0].userlist[0]);
                done();
            });

        });
    });

});