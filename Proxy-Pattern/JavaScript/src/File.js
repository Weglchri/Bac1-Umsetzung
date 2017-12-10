"use strict";
var Sequencegenerator = require("./Sequencegenerator");

function File(filename) {
    this._id = Sequencegenerator().getNexValue();
    this.filename = filename;
}

module.exports = File;