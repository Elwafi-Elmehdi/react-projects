class IndicisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOne = this.handleDeleteOne.bind(this)
    this.state = {
      options: props.options
    }
  }

  // Component Life Cycle Methodes

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {

    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('Cmp deleted');
  }


  // App functionality methods

  handleDeleteOne(option) {
    console.log(option, ' deleted');
    this.setState((prevState) => ({
      options: prevState.options.filter(elem => elem !== option)
    }))
  }
  handleAddOption(option) {
    if (!option) {
      return "Entre a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists on the liste."
    } else {
      this.setState(preState => ({
        options: preState.options.concat([option])
      }))
    }
  }
  handleRandom() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum];
    alert(option)
  }
  handleDeleteAll() {
    this.setState(() => ({ options: [] }))
  }
  render() {
    const title = 'Indicision'
    const subTitle = 'Pute your life in the hands of a computer'
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
          deleteOne={this.handleDeleteOne}
        />
        <AddOption addOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  )
}
Header.defaultProps = {
  title: 'some default value'
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleRandom}
        disabled={!props.hasOptions}
      >
        what should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAll}>Remove All Options</button>
      {
        props.options.map(elem =>
          <Option
            key={elem}
            optionText={elem}
            deleteOne={props.deleteOne}
          />
        )
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <p key={props.optionText}>{props.optionText}</p>
      <button
        onClick={(e) => props.deleteOne(props.optionText)}
      >remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {

  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.addOption(option)
    if (!error) {
      e.target.elements.option.value = ''
    }
    this.setState(() => ({
      error
    }))
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        {this.state.error && <p>{this.state.error}</p>}
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndicisionApp options={[]} />, document.getElementById('app'))