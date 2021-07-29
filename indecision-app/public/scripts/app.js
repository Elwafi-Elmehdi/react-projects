'use strict';

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
    _this.state = {
      options: ['1', '2', '3', '4', '5']
    };
    return _this;
  }

  _createClass(IndicisionApp, [{
    key: 'handleAddOption',
    value: function handleAddOption(option) {

      this.setState(function (preState) {
        return {
          options: preState.options.concat([option])
        };
      });
    }
  }, {
    key: 'handleRandom',
    value: function handleRandom() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleDeleteAll',
    value: function handleDeleteAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indicision';
      var subTitle = 'Pute your life in the hands of a computer';
      // const options = ['1', '2', '3']

      return React.createElement(
        'div',
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

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handleRandom,
            disabled: !this.props.hasOptions
          },
          'what should I do?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.deleteAll },
          'Remove All Options'
        ),
        this.props.options.map(function (elem) {
          return React.createElement(Option, { key: elem, optionText: elem });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          { key: this.props.optionText },
          this.props.optionText
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
    return _this6;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) this.props.addOption(option);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleAddOption },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          null,
          'Add Option'
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndicisionApp, null), document.getElementById('app'));
