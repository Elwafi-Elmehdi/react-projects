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
 constructor(name, age, major) {
  super(name, age)
  this.major = major
 }
 hasMajor() {
  return !!this.major
 }
 getDescription() {
  let desc = super.getDescription;
  if (this.major) {
   desc += `and has a major in ${this.major}`
  }
  return desc
 }
}

const me = new Student('Elmehdi ELWAFI', 21, 'Computer Science')
console.log(me);
console.log(me.hasMajor());

const other = new Student()
console.log(other);
console.log(other.hasMajor());
