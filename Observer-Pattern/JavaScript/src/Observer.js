class Observer {
    constructor() {
		if (this.constructor === Observer) {
			throw new Error("Can't instantiate Observer class");
		}
	}

    update(val) {
        //no default implementation
    }
}

module.exports = Observer;