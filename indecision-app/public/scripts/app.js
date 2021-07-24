"use strict";

console.log('App.js is running');

var app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days",
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

var guessOption = function guessOption() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var renderApp = function renderApp() {
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
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: guessOption },
      "What Should I do ?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "removeAll"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (elem) {
        return React.createElement(
          "li",
          { key: elem },
          elem
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
