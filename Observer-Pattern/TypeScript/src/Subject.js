"use strict";
exports.__esModule = true;
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = new Array();
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    };
    Subject.prototype.notify = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this);
        }
    };
    return Subject;
}());
exports.Subject = Subject;
