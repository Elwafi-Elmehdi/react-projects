class CounterApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    const strNumber = localStorage.getItem('count')
    const number = Number(strNumber)
    if (isNaN(number * 2) || !number) {
      this.setState(() => ({ count: 0 }))
    }
    this.setState(() => ({ count: number }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  handleAddOne() {
    this.setState((preState) => {
      return {
        count: preState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((preState) => {
      return {
        count: preState.count - 1
      }
    })
  }
  handleReset() {
    this.setState((preState) => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}


ReactDOM.render(<CounterApp />, document.getElementById('app'))
// let count = 0

// const addOne = () => {
//  count += 1c
//  renderCounterApp()

// }
// const removeOne = () => {
//  count -= 1
//  renderCounterApp()
// }

// const reset = () => {
//  count = 0
//  renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {

//  const templateTwo = (
//   <div>
//    <h1>Count: {count}</h1>
//    <button onClick={addOne}>+1</button>
//    <button onClick={removeOne}>-1</button>
//    <button onClick={reset}>reset</button>
//   </div>
//  )
//  ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()

// const user = {
//  name: "ELWAFI",
//  age: 23,
//  location: "Marrakech"
// }
// const getLocation = (location) => {
//  if (location)
//   return <p>Location: {location}</p>
// }

// // const templateTwo = (
// //   <div>
// //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //     {(user.age && user.age > 18) && <p>Age : {user.age}</p>}
// //     {getLocation(user.location)}
// //   </div>
// // );