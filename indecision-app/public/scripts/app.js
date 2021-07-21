'use strict';

console.log('App.js is running');

// JSX Javascript XML
var template = React.createElement(
  'p',
  null,
  'this is JSX from app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
