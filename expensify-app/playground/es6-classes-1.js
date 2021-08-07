class Person {
 constructor(name = 'Anonymous', age = 0) {
  this.name = name
  this.age = age
 }
 getDescription() {
  return `${this.name} is ${this.age} old.`
 }
 getGreeting() {
  return `Hey i am ${this.name}`
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
  let desc = super.getDescription();
  if (this.major) {
   desc += `and has a major in ${this.major}`
  }
  return desc
 }
}

class Traveler extends Person {
 constructor(name, age, homeLocation) {
  super(name, age)
  this.homeLocation = homeLocation
 }
 getGreeting() {
  let greeting = super.getGreeting()
  if (this.homeLocation) {
   greeting += `, and I live in ${this.homeLocation}`
  }
  return greeting
 }


}

const me = new Student('Elmehdi ELWAFI', 21, 'Computer Science')
console.log(me.getDescription());

const other = new Student()
console.log(other.getDescription());


const other_1 = new Traveler("Don Twick", 26, "Albama,USA")
console.log(other_1.getGreeting());

