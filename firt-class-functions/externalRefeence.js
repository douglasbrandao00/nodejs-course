var couter = 0;

var add = function add() {
  return ++couter;
};

console.log(add());
console.log(add());
console.log(add());

itens = [];
var add = function(itensToPush){
  itens.push(itensToPush);
  return itens
};

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));

console.log(add());
