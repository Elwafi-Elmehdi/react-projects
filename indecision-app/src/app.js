console.log('App.js is running');

// JSX Javascript XML
var template = (
 <div>
  <h1>Indecision App</h1>
  <p>this is some info</p>

  <ol>
   <li>first</li>
   <li>second</li>
  </ol>
 </div>
);
var user = {
 name:"ELWAFI",
 age:23,
 location:"Marrakech"
}
var fullname = 'Elmehdi ELWAFI'
var age = 21
var userLocation = 'Marrakech,Morocco'

var templateTwo = (
 <div>
  <h1>{user.name}</h1>
  <p>Age : {user.age}</p>
  <p>Location : {user.location}</p>
 </div>
);

var appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo,appRoot);