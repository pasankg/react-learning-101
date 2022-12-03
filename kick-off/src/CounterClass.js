import { Component } from "react";

class Counter extends Component {
 // Define defaults.
 static defaultProps = {
  startAt: 0,
  countBy: 1
 };

 /* 
  It is important to define the constructor
  and pass in the props as a parameter. Also it is important
  to pass it to the Component class which is the super class.
 */
 constructor(props) {
  super(props);

  // Set the initial state.
  this.state = {
   counter: props.startAt
  };

  /* 
  This is a fix to stop js from throwing an error
  Uncaught TypeError: Cannot read properties of undefined (reading 'setState')
  for the onclick functions.
  Reason is the onclick functions are not executing within the context of the component.
  */
  // this.countUp = this.countUp.bind(this)
  this.countDown = this.countDown.bind(this)
 }

 countUp() {
  // We can use react method setState()
  this.setState({ counter: this.state.counter + this.props.countBy })
 }

 countDown() {
  // We can use react method setState()
  this.setState({ counter: this.state.counter - this.props.countBy })
 }

 //render() is the Render, re-render method for react classes.
 render() {
  return (
   <>
    <p>Start At: {this.props.startAt}</p>
    <p>Count By: {this.props.countBy}</p>
    <h4>{this.state.counter}</h4>

    {/* Props are camelcased, therefore instead of onclick, use onClick */}

    {/* 
    The onclick functions are NOT executing within the context of the component.
    We can use two options to resolve this.
    
    Option 1:
    We can use an arrow function to wrap the calling of the methods, 
    so that it will reference the compoent function rather than undefined.  
    
    Option 2:
    Binding the methods to the component object.
    */}

    {/* Option 1 */}
    <button className='btn btn-primary' onClick={()=>this.countUp()}>Count Up</button>
    {/* Option 2 - See line 30 */}
    <button className='btn btn-danger' onClick={this.countDown}>Count Down</button>

   </>
  );
 }

}

export default Counter;