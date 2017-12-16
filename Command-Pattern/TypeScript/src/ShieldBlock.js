"use strict";
exports.__esModule = true;
var ShieldBlock = /** @class */ (function () {
    function ShieldBlock(knight) {
        this.knight = knight;
    }
    ShieldBlock.prototype.execute = function () {
        this.knight.shieldblock();
    };
    return ShieldBlock;
}());
exports.ShieldBlock = ShieldBlock;
