var Subject = require("./Subject");

class Participant extends Subject {
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }

    setId(id) {
        this.id = id;
        this.notify();
    }

    setName(name) {
        this.name = name;
        this.notify();
    }
}

module.exports = Participant;