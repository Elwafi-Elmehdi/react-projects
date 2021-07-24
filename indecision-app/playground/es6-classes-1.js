class Person {
 constructor(name, age = 0) {
  this.name = name
  this.age = age
 }
 getDescription() {
  return `${this.name} is ${this.age} old.`
 }
}

const me = new Person('Elmehdi ELWAFI', 21)
console.log(me.getDescription());

const other = new Person('hehe')
console.log(other.getDescription());