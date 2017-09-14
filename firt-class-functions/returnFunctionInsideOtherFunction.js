var hello = function() {
  var mensage = 'Hello Word';
  return function () {
    return mensage;
  };
};
console.log(hello);
console.log(hello());

console.log(hello()());
