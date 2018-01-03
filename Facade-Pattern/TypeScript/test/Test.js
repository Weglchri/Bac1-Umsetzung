"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var AccountService_1 = require("./../src/AccountService");
var Person_1 = require("./../src/Person");
//call node.js assert tool
var assert = require('assert');
describe('ConstructorTest', function () {
    var person;
    describe('#PersonTest', function () {
        it('test person instatiation', function () {
            person = new Person_1.Person("Christopher", 23, "valid", 5124, "no");
            assert.deepEqual(new Person_1.Person("Christopher", 23, "valid", 5124, "no"), person);
        });
    });
    describe('#AccountServiceTest', function () {
        it('test accountservice instatiation', function () {
            var accountservice = new AccountService_1.AccountService();
            assert.deepEqual(new AccountService_1.AccountService(), accountservice);
        });
    });
});
describe('AccountServiceTest', function () {
    var accountservice;
    var person1;
    var person2;
    var person3;
    var person4;
    var PERMITTED = true;
    var NOT_PERMITTED = false;
    before(function () {
        accountservice = new AccountService_1.AccountService();
        person1 = new Person_1.Person("Christopher", 23, "valid", 5124, "no"); //account deactivaded
        person2 = new Person_1.Person("Jagura", 21, "valid", 12, "no"); //passes
        person3 = new Person_1.Person("Merson", 15, "", 41, "no"); //empty account field
        person4 = new Person_1.Person("Caitlyn", 18, "valid", 1000, "yes"); //already has an insurance
    });
    describe('#PersonTest', function () {
        it('compare person data', function () {
            assert.equal("Christopher", person1.name);
            assert.equal(23, person1.age);
            assert.equal("valid", person1.account);
            assert.equal(5124, person1.transactions);
            assert.equal("no", person1.insurance);
        });
    });
    describe('#AccountServiceTest', function () {
        it('test insurance permission person1', function () {
            return __awaiter(this, void 0, void 0, function () {
                var permission;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, accountservice.checkPersonInsuranceClaim(person1)];
                        case 1:
                            permission = _a.sent();
                            assert.equal(PERMITTED, permission);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('#AccountsServiceTest', function () {
        it('test insurance permission person2', function () {
            return __awaiter(this, void 0, void 0, function () {
                var permission;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, accountservice.checkPersonInsuranceClaim(person2)];
                        case 1:
                            permission = _a.sent();
                            assert.equal(PERMITTED, permission);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('#AccountsServiceTest', function () {
        it('test insurance permission person3', function () {
            return __awaiter(this, void 0, void 0, function () {
                var permission;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, accountservice.checkPersonInsuranceClaim(person3)];
                        case 1:
                            permission = _a.sent();
                            assert.equal(NOT_PERMITTED, permission);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('#AccountsServiceTest', function () {
        it('test insurance permission person4', function () {
            return __awaiter(this, void 0, void 0, function () {
                var permission;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, accountservice.checkPersonInsuranceClaim(person4)];
                        case 1:
                            permission = _a.sent();
                            assert.equal(NOT_PERMITTED, permission);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
