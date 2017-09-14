function Person(firtName, lastName){
  this.firtName = firtName,
  this.lastName = lastName
}

Person.prototype.greet = function() {
  console.log('hi!, ' + this.firtName);
};

var douglas = new Person('Douglas','Brandao');
console.log(douglas.lastName);
douglas.greet();
