console.log('App.js is running');

const app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days",
  options: []
}
const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const removeAll = () => {
  app.options = []
  renderApp()

}

const appRoot = document.getElementById('app')


const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      {app.options.length > 0 ? <p>Here is your options</p> : <p>No options</p>}
      <p>{app.options.length}</p>
      <button onClick={removeAll}>removeAll</button>
      <ol>
        <li>{app.options[0]}</li>
        <li>{app.options[1]}</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

renderApp()