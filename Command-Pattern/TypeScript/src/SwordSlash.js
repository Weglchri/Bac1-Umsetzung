"use strict";
exports.__esModule = true;
var SwordSlash = /** @class */ (function () {
    function SwordSlash(knight) {
        this.knight = knight;
    }
    SwordSlash.prototype.execute = function () {
        this.knight.swordslash();
    };
    return SwordSlash;
}());
exports.SwordSlash = SwordSlash;
