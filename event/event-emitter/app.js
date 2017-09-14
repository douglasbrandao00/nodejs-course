var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('in so far way, some one sow daleBoy');
});

emtr.on('greet', function() {
    console.log('and then another one sow, apoiVu!');
});

emtr.emit('greet');