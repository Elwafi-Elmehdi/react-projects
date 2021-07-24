class Person {
 constructor(name = 'name') {
  this.name = name
 }
}

const me = new Person('Elmehdi ELWAFI')
console.log(me);

const other = new Person()
console.log(other);