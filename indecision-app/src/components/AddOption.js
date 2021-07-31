import React from 'react'

export default class AddOption extends React.Component {

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
