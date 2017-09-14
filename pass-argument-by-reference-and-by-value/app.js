function change(x) {
  x = 1;
  console.log(x);
}

var a = 2;

change(a);

console.log(a);

/////////////////////////////
function changeObject(z) {
  z.prop1 = function() {};
  z.prop2 = {};
}

var b = {};
b.prop1 = {};

changeObject(b);

b.prop1 = {};

console.log(b);
