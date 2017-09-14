var Emitter = require('events');
var config = require('./config');

var emtr = new Emitter();
var configEvents = config.events.GREET;

emtr.on(configEvents, function() {
    console.log('in so far way, some one sow daleBoy');
});

emtr.on(configEvents, function() {
    console.log('and then another one sow, apoiVu!');
});

emtr.emit(configEvents);
