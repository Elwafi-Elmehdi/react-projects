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

  handlePick() {
    console.log('working')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>what should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log('removeAll working')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All Options</button>
        {
          this.props.options.map(elem => <Option key={elem} optionText={elem} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p key={this.props.optionText}>{this.props.optionText}</p>
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