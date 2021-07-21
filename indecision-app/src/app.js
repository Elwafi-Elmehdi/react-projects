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

var fullname = 'Elmehdi ELWAFI'
var templateTwo = (
 <div>
  <h1>Elmehdi ELWAFI</h1>
  <p>Age : 21</p>
  <p>Location : Marrakech,Morocco</p>
 </div>
);

var appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo,appRoot);