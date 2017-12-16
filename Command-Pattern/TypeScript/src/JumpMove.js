"use strict";
exports.__esModule = true;
var JumpMove = /** @class */ (function () {
    function JumpMove(knight) {
        this.knight = knight;
    }
    JumpMove.prototype.execute = function () {
        this.knight.jumpmove();
    };
    return JumpMove;
}());
exports.JumpMove = JumpMove;
