var Observer = require("./Observer");

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        if (observer instanceof Observer) {
			this.observers.push(observer);
		}
    }

    removeObserver(observer) {
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    }

    notify() {
        for (let observer of this.observers) {
            observer.update(this);
        }
    }
}


module.exports = Subject;