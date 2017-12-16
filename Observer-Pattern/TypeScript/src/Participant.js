"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Subject_1 = require("./Subject");
var Participant = /** @class */ (function (_super) {
    __extends(Participant, _super);
    function Participant(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Participant.prototype.setId = function (id) {
        this.id = id;
        this.notify();
    };
    Participant.prototype.setName = function (name) {
        this.name = name;
        this.notify();
    };
    return Participant;
}(Subject_1.Subject));
exports.Participant = Participant;
