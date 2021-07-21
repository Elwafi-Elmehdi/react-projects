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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
