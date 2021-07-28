class IndicisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: ['1', '2', '3', '4', '5']
    }
  }
  render() {
    const title = 'Indicision'
    const subTitle = 'Pute your life in the hands of a computer'
    // const options = ['1', '2', '3']

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action hasOptions={this.state.options.length > 0} />
        <Options options={this.state.options} />
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
        <button
          onClick={this.handlePick}
          disabled={!this.props.hasOptions}
        >
          what should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  handleRemoveAll() {
    console.log('removeAll working')
    console.log(this.props.options);
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

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option)
      alert(option)
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndicisionApp />, document.getElementById('app'))