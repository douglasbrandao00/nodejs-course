'use strict';

var event = require('events');

module.exports = class Greeter extends event {
    constructor() {
        super()
        this.greeting = 'dale'
    }

    greet(data) {
        console.log(this.greeting + ', ' + data);
    }
}