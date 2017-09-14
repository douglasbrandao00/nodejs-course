var arr = [];

arr.push(function(){
    console.log('that is inside of a array \/');
});

arr.forEach(function(iten){
    iten();
});