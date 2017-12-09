function* Sequencegenerator() {
  var index = 1;
  while(true)
    yield index++;
}

Sequencegenerator.prototype.getNexValue = function() {
    return generator.next().value;
}

var generator = Sequencegenerator();

module.exports = Sequencegenerator;