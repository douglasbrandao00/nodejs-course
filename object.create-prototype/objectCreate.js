var person = {
    firtName: 'Douglas',
    lastname: 'Brandão',
    printName: function(){
        return this.firtName + ' ' + this.lastname;
    }
}

console.log(person.printName());

var jony = Object.create(person);

jony.firtName = 'Jonny';

console.log(jony.printName());


