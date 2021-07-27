'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterApp = function (_React$Component) {
  _inherits(CounterApp, _React$Component);

  function CounterApp(props) {
    _classCallCheck(this, CounterApp);

    var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(CounterApp, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (preState) {
        return {
          count: preState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (preState) {
        return {
          count: preState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function (preState) {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count : ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.getElementById('app'));
// let count = 0

// const addOne = () => {
//  count += 1c
//  renderCounterApp()

// }
// const removeOne = () => {
//  count -= 1
//  renderCounterApp()
// }

// const reset = () => {
//  count = 0
//  renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {

//  const templateTwo = (
//   <div>
//    <h1>Count: {count}</h1>
//    <button onClick={addOne}>+1</button>
//    <button onClick={removeOne}>-1</button>
//    <button onClick={reset}>reset</button>
//   </div>
//  )
//  ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()

// const user = {
//  name: "ELWAFI",
//  age: 23,
//  location: "Marrakech"
// }
// const getLocation = (location) => {
//  if (location)
//   return <p>Location: {location}</p>
// }

// // const templateTwo = (
// //   <div>
// //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //     {(user.age && user.age > 18) && <p>Age : {user.age}</p>}
// //     {getLocation(user.location)}
// //   </div>
// // );
