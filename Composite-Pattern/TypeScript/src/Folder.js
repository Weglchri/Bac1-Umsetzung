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
var Node_1 = require("./Node");
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this) || this;
        _this.nodes = new Array();
        _this.name = name;
        return _this;
    }
    Folder.prototype.addNode = function (node) {
        if (!node)
            throw new Error("Can't be null");
        this.nodes.push(node);
    };
    Folder.prototype.getNodes = function () {
        return this.nodes;
    };
    Folder.prototype.getNumberOfFiles = function () {
        var number = 0;
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            number += node.getNumberOfFiles();
        }
        return number;
    };
    Folder.prototype.getSize = function () {
        var size = 0;
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            size += node.getSize();
        }
        return size;
    };
    return Folder;
}(Node_1.Node));
exports.Folder = Folder;
