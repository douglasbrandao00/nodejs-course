var greetings = require('./greetings.json').en;

var greet = function() {
  console.log(greetings + '!!!');
}

module.exports = greet;
