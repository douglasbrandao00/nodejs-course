var getAge =  function(addvalue) {
  return this.age + addvalue;
}

var costomer = {
  name: 'joca',
  age: 14,
  getAge: getAge
};

console.log(costomer.getAge(2));
// CALL
console.log(getAge.call(costomer, 2));
// APPLY
console.log(getAge.apply(costomer, [2]));
