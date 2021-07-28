class VisibilityToggle extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   visible: false
  }
  this.handleToggle = this.handleToggle.bind(this)
 }
 handleToggle() {
  this.setState((preState) => {
   return {
    visible: !preState.visible
   }
  })
 }
 render() {
  return (
   <div>
    <h1>Visibility Toggle App</h1>
    <button onCLick={this.handleToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
   </div>
  )
 }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visible = false
// const msg = "lorem ipsum hehe libib knofan namdal sibsclar"
// const appRoot = document.getElementById('app')

// const toggle = () => {
//  visible = !visible
//  render()
// }

// const render = () => {
//  const template = (
//   <div>
//    <h1>Visibility Toggle App</h1>
//    <button onClick={toggle}>Show</button>
//    {visible && <p>{msg}</p>}
//   </div>

//  )
//  ReactDOM.render(template, appRoot)
// }
// render()
