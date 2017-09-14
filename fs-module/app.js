var fileSystem = require('fs');

var greet = fileSystem.readFileSync(__dirname + '/text.txt','utf8');

console.log(greet);

var greet2 = fileSystem.readFile(__dirname + '/text.txt','utf8',
function(err, data) {
    console.log(data);
});

console.log('Done!!')