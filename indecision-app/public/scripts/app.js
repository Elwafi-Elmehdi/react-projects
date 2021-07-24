"use strict";

var visible = false;
var msg = "lorem ipsum hehe libib knofan namdal sibsclar";
var appRoot = document.getElementById('app');

var toggle = function toggle() {
  visible = !visible;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle App"
    ),
    React.createElement(
      "button",
      { onClick: toggle },
      "Show"
    ),
    visible && React.createElement(
      "p",
      null,
      msg
    )
  );
  ReactDOM.render(template, appRoot);
};
render();
