console.log('App.js is running');

const app = {
  title: "Workout",
  subTitle: "Run 3 km in 2 days",
  options: ['one', 'two']
}
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    {app.options.length > 0 ? <p>Here is your options</p> : <p>No options</p>}
    {app.options && <ol><li>{app.options[0]}</li><li>{app.options[1]}</li></ol>}
  </div>
);

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)