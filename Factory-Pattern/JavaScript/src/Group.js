function Group(groupname) {
    this._id = groupname;
    this.userlist = [];
    this.size = this.userlist.length;
}

Group.prototype.adduser = function(user) {
    this.size++;
    this.userlist.push(user);  
}

Group.prototype.getusers = function() {
    return this.userlist;
}

Group.prototype.deleteuser = function (user) {
    var i = this.userlist.indexOf(user);
    if (i != -1) {
        this.size--;
        this.userlist.splice(i, 1);
    }
}

module.exports = Group;