import { Component } from 'react';

class AddItemForm extends Component {
 constructor(props) {
  super(props);

  this.state = {
   newBrand: '',
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);

 }

 handleChange(e) {
  this.setState({
   newBrand: e.target.value
  });
 }

 handleClick(e) {
  e.preventDefault();

  // Call the onSubmit function to pass in the variable to update the state.
  this.props.onSubmit(this.state.newBrand);

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