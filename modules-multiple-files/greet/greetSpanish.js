var greetings = require('./greetings.json').es;

var greet = function() {
  console.log(greetings + '!!!');
}

module.exports = greet;
