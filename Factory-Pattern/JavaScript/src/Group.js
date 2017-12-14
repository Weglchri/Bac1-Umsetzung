class Group {
    constructor(groupname) {
        this._id = groupname;
        this.userlist = [];
        this.size = this.userlist.length;
    }

    addUser(user) {
        this.size++;
        this.userlist.push(user);
    }

    getUsers() {
        return this.userlist;
    }

    deleteUser(user) {
        var i = this.userlist.indexOf(user);
        if (i != -1) {
            this.size--;
            this.userlist.splice(i, 1);
        }
    }
}

module.exports = Group;