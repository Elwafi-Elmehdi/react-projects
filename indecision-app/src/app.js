class IndicisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header title="test value" />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Pute your life in the hands of a computer</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>what should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options goes here
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component Here
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Add Option goes here
      </div>
    )
  }
}

ReactDOM.render(<IndicisionApp />, document.getElementById('app'))