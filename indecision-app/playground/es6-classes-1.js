class Person {
 constructor(name = 'Anonymous', age = 0) {
  this.name = name
  this.age = age
 }
 getDescription() {
  return `${this.name} is ${this.age} old.`
 }
}

class Student extends Person {

}

const me = new Student('Elmehdi ELWAFI', 21)
console.log(me.getDescription());

const other = new Student()
console.log(other.getDescription());