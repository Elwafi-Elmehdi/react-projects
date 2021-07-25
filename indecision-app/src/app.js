class IndicisionApp extends React.Component {
  render() {
    const title = 'Indicision'
    const subTitle = 'Pute your life in the hands of a computer'
    const options = ['1', '2', '3']
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
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
        <h2>{this.props.subTitle}</h2>
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
        {
          this.props.options.map(elem => {
            return (<p key={elem}>{elem}</p>)
          })
        }
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