class CounterApp extends React.Component {

  handleAddOne() {
    console.log('handleAddOne');
  }
  handleMinusOne() {
    console.log('handleMinusOne');
  }
  handleReset() {
    console.log('handleReset');
  }
  render() {
    return (
      <div>
        <h1>Count :</h1>
        <button>+1</button>
        <button>-1</button>
        <button>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))
// let count = 0

// const addOne = () => {
//  count += 1
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