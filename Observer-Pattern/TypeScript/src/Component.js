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
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Component.prototype.setId = function (id) {
        this.id = id;
        this.notify();
    };
    Component.prototype.setName = function (name) {
        this.name = name;
        this.notify();
    };
    return Component;
}(Subject_1.Subject));
exports.Component = Component;
