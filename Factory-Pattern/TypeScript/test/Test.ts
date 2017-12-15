
import { TableFactory } from "./../src/TableFactory"
import { TableFactoryImpl } from "./../src/TableFactoryImpl"
import { User } from "./../src/User"
import { Group } from "./../src/Group"
import mocha = require('mocha');
import assert = require('assert');


describe('ConstructorTest', function() {
  
    let newfactory:TableFactory;
    
    describe('#FactoryTest', function() {
        it('test factory instantiaion', function() {
            newfactory = new TableFactoryImpl();
            assert.deepEqual(new TableFactoryImpl(), newfactory);
        });
    });
    
    describe('#UserTableTest', function() {
        it('test usertable instantiaion', function() {
            let usertable = newfactory.createTable("UserTable");
            assert.deepEqual(new TableFactoryImpl(), usertable);
        });
    });
    
    describe('#GroupTableTest', function() {
        it('test grouptable instantiaion', function() {
            let grouptable = newfactory.createTable("GroupTable");
            assert.deepEqual(new TableFactoryImpl(), grouptable);
        });
    });
    
});


describe('UserClassTest', function() {
    
    let user:User;
    
    before(function() {
        user = new User("Weglchri15", "Christopher", 23, "Graz");
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

describe('GroupClassTest', function() {
   
    let group:Group;
    let user:User;
    
    beforeEach(function() {
       group = new Group("FH-Group");
       user = new User("Weglchri15", "Christopher", 23, "Graz");
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









