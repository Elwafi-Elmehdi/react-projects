console.log('App.js is running');

var app = {
 title: "Workout",
 subTitle:"Run 3 km in 2 days"
}

// JSX Javascript XML
var template = (
 <div>
  <h1>{app.title}</h1>
  <p>{app.subTitle}</p>

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

ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo,appRoot);