var createCounter = function() {
  var value = 0;
  return {
    add: function() {
      return ++value;
    }
  };
};

var counter = createCounter();
console.log(createCounter().add());

console.log(counter.add());
