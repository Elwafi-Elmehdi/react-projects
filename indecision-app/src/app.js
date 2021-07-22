console.log('App.js is running');

var app = {
 title: "Workout",
 subTitle:"Run 3 km in 2 days",
 options:['one','two']
}

// JSX Javascript XML
var template = (
 <div>
  <h1>{app.title}</h1>
  {app.subTitle && <p>{app.subTitle}</p> }
  {app.options.length > 0 ? <p>Here is your options</p> : <p>No options</p>}
  {app.options && <ol><li>{app.options[0]}</li><li>{app.options[1]}</li></ol>}
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

ReactDOM.render(template, appRoot)
// ReactDOM.render(templateTwo,appRoot);