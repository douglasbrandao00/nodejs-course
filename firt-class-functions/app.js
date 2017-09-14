// Greet Statment
function greet() {
  return console.log('Hi dude :D');
}

greet();

// firt-class function \0/

function logGreet(fcf){
  fcf()
}

logGreet(greet)
