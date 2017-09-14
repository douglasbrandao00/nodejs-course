var event = require('events');
var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
    //this.emit('greet');
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}
Policeman.prototype.greet2 = function() {
    console.log(this.badgenumber);
}

util.inherits(Policeman, Person);
var officer = new Policeman();

officer.greet();
officer.greet2();