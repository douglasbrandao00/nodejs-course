// Factor
var createPerson = function(name, age) {
    return {
      name: name,
      age: age
    };
};

console.log(createPerson('Douglas', 24));
console.log(createPerson('kariane', 23));

// Constructor

var CreatePerson = function(name, age) {
  this.name = name,
  this.age = age
};

console.log(new CreatePerson('josé', 256));
