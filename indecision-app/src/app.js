class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indicision</h1>
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
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Add Option goes here
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <Option />
  </div>
)
ReactDOM.render(jsx, document.getElementById('app'))