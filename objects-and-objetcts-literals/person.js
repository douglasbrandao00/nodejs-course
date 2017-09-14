var person = {
    firstname: 'Douglas',
    lastname: 'Brandão',
    greet: function() {
      console.log('Hi, ' + this.firstname + ' ' +
      this.lastname + '!');
  }
}

person.greet();

console.log(person['firstname']);
