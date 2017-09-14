var greetings = require('./greetings.json').ptbr;

var greet = function() {
  console.log(greetings + '!!!');
}

module.exports = greet;
