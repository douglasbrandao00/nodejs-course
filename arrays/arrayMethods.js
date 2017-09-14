var carros = [
    {marca: 'Ford', modelo: 'Ford1'},
    {marca: 'VW', modelo: 'VW1'},
    {marca: 'Ford', modelo: 'Ford2'},
    {marca: 'Ford', modelo: 'Ford3'},
    {marca: 'CSA', modelo: 'CSA1'},
];


var carrosEvery = carros.every(function(elementArray) {
    elementArray.marca === 'Ford';
});

var carrosSome = carros.some(function(elementArray) {
    return elementArray.marca === 'Ford';
});

var carrosMap = carros.map(function(elementArray) {
    return elementArray.marca;
});

console.log('Every: ' + carrosEvery);
console.log('Some: ' + carrosSome);
console.log('Map: ' + carrosMap);