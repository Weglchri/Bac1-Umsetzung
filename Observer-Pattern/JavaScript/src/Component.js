var Subject = require("./Subject");

class Component extends Subject {
    constructor(id, name) {
        super();
        this._id = id;
        this._name = name;
    }

    set setId(id) {
        this._id = id;
        this.notify();
    }
	
	get getId() {
		return this._id;
	}

    set setName(name) {
        this._name = name;
        this.notify();
    }
	
	get getName() {
		return this._name;
	}
}

module.exports = Component;