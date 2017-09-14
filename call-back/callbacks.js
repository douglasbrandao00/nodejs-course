function greet(callback){
    console.log('hello!');
    var message = {
        name: ' Shit'
    }
    callback(message);
};

greet(function(message) {
    console.log('the call Back has come ;|' + message.name)
});

greet(function(message) {
    console.log('this is a different call Back :0' + message.name + message.name + message.name)
});