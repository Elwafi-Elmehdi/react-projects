// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'

import AddOption from './components/AddOption'
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import Option from './components/Option'

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

ReactDOM.render(<IndicisionApp options={[]} />, document.getElementById('app'))