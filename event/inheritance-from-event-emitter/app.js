var event = require('events');
var util = require('util');

function Greeter(){
    event.apply(this);
    this.greeting = 'Dale Boythóulha';
}

util.inherits(Greeter,event);

Greeter.prototype.greet = function(data) {
    console.log('hi ó o ' + data + '! ' + this.greeting);
    this.emit('greet', data);
};

var greet1 = new Greeter();

greet1.greet('Douglas');