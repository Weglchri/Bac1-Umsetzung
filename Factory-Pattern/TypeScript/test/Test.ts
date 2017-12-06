
import { TableFactory } from "./../src/TableFactory"
import { TableFactoryImpl } from "./../src/TableFactoryImpl"
import mocha = require('mocha');
import assert = require('assert');


describe('FactoryTest', function() {
  
    var newfactory:TableFactoryImpl;
    
    before(function() {
        newfactory = new TableFactoryImpl();
    });
    
    describe('#createFactoryTest', function() {
        it('default factory should be an instance of TableFactory', function() {
            assert.deepEqual(new TableFactoryImpl(), newfactory);
        });
    });
});

