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
const getLocation = (location) => {
 if(location)
  return <p>Location: {location}</p>
}

var templateTwo = (
 <div>
  <h1>{user.name ? user.name : 'Anonymous' }</h1>
  { (user.age && user.age > 18) && <p>Age : {user.age}</p>}
  <p>{getLocation(user.location)}</p>
 </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
// ReactDOM.render(templateTwo,appRoot);