"use strict";
exports.__esModule = true;
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.press = function (command) {
        command.execute();
    };
    return Controller;
}());
exports.Controller = Controller;
