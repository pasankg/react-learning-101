import { Component } from 'react';

class AddItemForm extends Component {
 constructor(props) {
  super(props);

  // Set intial value for newBrand variable.
  this.state = {
   newBrand: '',
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);

 }

 // Updates newBrand state as user key in text.
 handleChange(e) {
  this.setState({
   newBrand: e.target.value
  });
 }

 // Executes onSubmit action when Add brand is clicked.
 handleClick(e) {
  e.preventDefault();

  console.log('handleClick - before onSubmit');

  // Call the onSubmit function to pass in the variable to update the state.
  this.props.onSubmit(this.state.newBrand);

  console.log('handleClick - after onSubmit');

  // Reset the newBrand value.
  this.setState({
   newBrand: ''
  })

 }

 render() {
  return (
   <>
    <form classaName='form-inline'>

     <input
      type='text'
      className='form-control-inline'
      value={this.state.newBrand}
      onChange={this.handleChange}
     />

     <button
      className='btn btn-primary'
      onClick={this.handleClick}
     >{this.props.buttonText}
     </button>

    </form>
   </>
  );
 }
}
export default AddItemForm;