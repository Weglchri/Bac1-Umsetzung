import { TableFactory } from "./../jssrc/TableFactory"
import { TableFactoryImpl } from "./../jssrc/TableFactoryImpl"
import 'mocha'
import 'assert' 

var assert = require('assert');


describe('FactoryTest', function() {
  
    let newfactory:TableFactoryImpl;
    
    before(function() {
        newfactory = new TableFactoryImpl();
    });
    
    describe('#createFactoryTest', function() {
        it('default factory should be an instance of TableFactory', function() {
            assert.deepEqual(new TableFactoryImpl(), newfactory);
        });
    });
});

