let visible = false
const msg = "lorem ipsum hehe libib knofan namdal sibsclar"
const appRoot = document.getElementById('app')

const toggle = () => {
 visible = !visible
 render()
}

const render = () => {
 const template = (
  <div>
   <h1>Visibility Toggle App</h1>
   <button onClick={toggle}>Show</button>
   {visible && <p>{msg}</p>}
  </div>

 )
 ReactDOM.render(template, appRoot)
}
render()
