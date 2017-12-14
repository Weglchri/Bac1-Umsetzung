class User {
    constructor(username, name, age, address) {
        this._id = username;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

module.exports = User;