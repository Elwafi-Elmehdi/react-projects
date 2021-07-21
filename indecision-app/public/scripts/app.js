'use strict';

console.log('App.js is running');

// JSX Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'this is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'first'
    ),
    React.createElement(
      'li',
      null,
      'second'
    )
  )
);

var fullname = 'Elmehdi ELWAFI';
var age = 21;
var userLocation = 'Marrakech,Morocco';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    fullname
  ),
  React.createElement(
    'p',
    null,
    'Age : ',
    age
  ),
  React.createElement(
    'p',
    null,
    'Location : ',
    userLocation
  )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo, appRoot);
