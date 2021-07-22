"use strict";

console.log('App.js is running');

var app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days",
  options: ['one', 'two']

  // JSX Javascript XML
};var template = React.createElement(
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
var user = {
  name: "ELWAFI",
  age: 23,
  location: "Marrakech"
};
var getLocation = function getLocation(location) {
  if (location) return React.createElement(
    "p",
    null,
    "Location: ",
    location
  );
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age > 18 && React.createElement(
    "p",
    null,
    "Age : ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo,appRoot);
