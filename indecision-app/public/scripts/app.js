"use strict";

console.log('App.js is running');

var app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days"

  // JSX Javascript XML
};var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subTitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "first"
    ),
    React.createElement(
      "li",
      null,
      "second"
    )
  )
);
var user = {
  name: "ELWAFI",
  age: 23,
  location: "Marrakech"
};
var fullname = 'Elmehdi ELWAFI';
var age = 21;
var userLocation = 'Marrakech,Morocco';

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
    user.name
  ),
  React.createElement(
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

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo,appRoot);
