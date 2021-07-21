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



var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)