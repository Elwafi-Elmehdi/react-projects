"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndicisionApp = function (_React$Component) {
  _inherits(IndicisionApp, _React$Component);

  function IndicisionApp(props) {
    _classCallCheck(this, IndicisionApp);

    var _this = _possibleConstructorReturn(this, (IndicisionApp.__proto__ || Object.getPrototypeOf(IndicisionApp)).call(this, props));

    _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
    _this.handleRandom = _this.handleRandom.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOne = _this.handleDeleteOne.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndicisionApp, [{
    key: "handleDeleteOne",
    value: function handleDeleteOne(option) {}
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Entre a valid option";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option already exists on the liste.";
      } else {
        this.setState(function (preState) {
          return {
            options: preState.options.concat([option])
          };
        });
        // this.setState((preState) => {
        //   return {
        //     options: preState.options.concat([option])
        //   }
        // })
      }
    }
  }, {
    key: "handleRandom",
    value: function handleRandom() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleDeleteAll",
    value: function handleDeleteAll() {
      this.setState(function () {
        return { options: [] };
      });
      // this.setState(() => {
      //   return {
      //     options: []
      //   }
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indicision';
      var subTitle = 'Pute your life in the hands of a computer';
      // const options = ['1', '2', '3']

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handleRandom: this.handleRandom
        }),
        React.createElement(Options, {
          deleteAll: this.handleDeleteAll,
          options: this.state.options
        }),
        React.createElement(AddOption, { addOption: this.handleAddOption })
      );
    }
  }]);

  return IndicisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};
Header.defaultProps = {
  title: 'some default value'

  // class Header extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h2>{this.props.subTitle}</h2>
  //       </div>
  //     );
  //   }
  // }

};var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.handleRandom,
        disabled: !props.hasOptions
      },
      "what should I do?"
    )
  );
};

// class Action extends React.Component {


//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handleRandom}
//           disabled={!this.props.hasOptions}
//         >
//           what should I do?
//         </button>
//       </div>
//     )
//   }
// }
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.deleteAll },
      "Remove All Options"
    ),
    props.options.map(function (elem) {
      return React.createElement(Option, { key: elem, optionText: elem });
    })
  );
};
// class Options extends React.Component {

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.deleteAll}>Remove All Options</button>
//         {
//           this.props.options.map(elem => <Option key={elem} optionText={elem} />)
//         }
//       </div>
//     )
//   }
// }

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      { key: props.optionText },
      props.optionText
    )
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p key={this.props.optionText}>{this.props.optionText}</p>
//       </div>
//     )
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.addOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleAddOption },
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name : ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age : ",
      props.age
    )
  );
};

ReactDOM.render(React.createElement(IndicisionApp, { options: ['Option one', 'Option two'] }), document.getElementById('app'));
