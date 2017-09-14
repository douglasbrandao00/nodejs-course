var carros = [
    {marca: 'Ford', modelo: 'Ford1'},
    {marca: 'VW', modelo: 'VW1'},
    {marca: 'Ford', modelo: 'Ford2'},
    {marca: 'Ford', modelo: 'Ford3'},
    {marca: 'CSA', modelo: 'CSA1'},
];

var carrosFord = carros.filter(function(elementoArray) {
    return elementoArray.marca === 'Ford';
});

console.log(carrosFord);