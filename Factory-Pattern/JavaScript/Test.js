const assert = require('assert');
const TableFactory = require('./TableFactory');
const GroupTable = require('./GroupTable');
const UserTable = require('./UserTable');



describe('FactoryTest', function() {
  
    describe('#createFactoryTest', function() {
        it('default factory should be an instance of TableFactory', function() {
            let newfactory = new TableFactory();
            assert.deepEqual(new TableFactory(), newfactory);
        });
    });
    
    describe('#createUserFactoryTest', function() {
        it('user factory should be an instance of TableFactory', function() {
            let newfactory = new TableFactory();
            let userfactory = newfactory.createTable("UserTable");
            assert.deepEqual(new TableFactory(), userfactory);
        });
    });
    
    describe('#createGroupFactoryTest', function() {
        it('group factory should be an instance of TableFactory', function() {
            let newfactory = new TableFactory();
            let groupfactory = newfactory.createTable("GroupTable");
            assert.deepEqual(new TableFactory(), groupfactory);
        });
    });
    
});
