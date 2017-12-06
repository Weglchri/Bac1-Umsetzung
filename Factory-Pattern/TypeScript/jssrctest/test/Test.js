"use strict";
exports.__esModule = true;
var TableFactoryImpl_1 = require("./../src/TableFactoryImpl");
var assert = require("assert");
describe('FactoryTest', function () {
    var newfactory;
    before(function () {
        newfactory = new TableFactoryImpl_1.TableFactoryImpl();
    });
    describe('#createFactoryTest', function () {
        it('default factory should be an instance of TableFactory', function () {
            assert.deepEqual(new TableFactoryImpl_1.TableFactoryImpl(), newfactory);
        });
    });
});
