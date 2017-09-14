var relou = function() {
  return function() {
    return 'Helo Word!!';
  };
};

console.log(relou);
console.log(relou());
console.log(relou()());
