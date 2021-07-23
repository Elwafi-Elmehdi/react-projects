"use strict";

console.log('App.js is running');

var app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days",
  options: ['one', 'two']
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    "p",
    null,
    app.subTitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here is your options"
  ) : React.createElement(
    "p",
    null,
    "No options"
  ),
  app.options && React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      app.options[0]
    ),
    React.createElement(
      "li",
      null,
      app.options[1]
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
