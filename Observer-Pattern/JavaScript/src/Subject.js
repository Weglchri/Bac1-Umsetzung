class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    }

    notify() {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this);
        }
    }
}


module.exports = Subject;