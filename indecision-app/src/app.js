class IndicisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: ['1', '2', '3', '4', '5']
    }
  }
  handleAddOption(option) {

    this.setState((preState) => {
      return {
        options: preState.options.concat([option])
      }
    })
  }
  handleRandom() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum];
    alert(option)
  }
  handleDeleteAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  render() {
    const title = 'Indicision'
    const subTitle = 'Pute your life in the hands of a computer'
    // const options = ['1', '2', '3']

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleRandom={this.handleRandom}
        />
        <Options
          deleteAll={this.handleDeleteAll}
          options={this.state.options}
        />
        <AddOption addOption={this.handleAddOption} />
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
        <button
          onClick={this.props.handleRandom}
          disabled={!this.props.hasOptions}
        >
          what should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.deleteAll}>Remove All Options</button>
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

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if (option)
      this.props.addOption(option)
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