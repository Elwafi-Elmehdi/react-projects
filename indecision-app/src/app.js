console.log('App.js is running');

const app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days",
  options: ['one', 'two']
}

// JSX Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options.length > 0 ? <p>Here is your options</p> : <p>No options</p>}
    {app.options && <ol><li>{app.options[0]}</li><li>{app.options[1]}</li></ol>}
  </div>
);
const user = {
  name: "ELWAFI",
  age: 23,
  location: "Marrakech"
}
const getLocation = (location) => {
  if (location)
    return <p>Location: {location}</p>
}

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age > 18) && <p>Age : {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
let count = 0

const addOne = () => {
  count += 1
  renderCounterApp()

}
const removeOne = () => {
  count -= 1
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {

  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={removeOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()