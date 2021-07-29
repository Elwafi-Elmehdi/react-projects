class IndicisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  handleAddOption(option) {
    if (!option) {
      return "Entre a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists on the liste."
    } else {
      this.setState((preState) => {
        return {
          options: preState.options.concat([option])
        }
      })
    }
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
const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAll}>Remove All Options</button>
      {
        props.options.map(elem => <Option key={elem} optionText={elem} />)
      }
    </div>
  )
}
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

const Option = (props) => {
  return (
    <div>
      <p key={props.optionText}>{props.optionText}</p>
    </div>
  )
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p key={this.props.optionText}>{this.props.optionText}</p>
//       </div>
//     )
//   }
// }

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
    this.setState(() => {
      return {
        error
      }
    })
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

const User = (props) => {
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
    </div>
  )
}

ReactDOM.render(<IndicisionApp />, document.getElementById('app'))