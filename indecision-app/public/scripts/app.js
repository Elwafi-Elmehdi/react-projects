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

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age > 18) && <p>Age : {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
var count = 0;
var addOne = function addOne() {
  count += 1;
};
var removeOne = function removeOne() {
  count -= 1;
};

var reset = function reset() {
  count = 0;
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: removeOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateTwo,appRoot);
