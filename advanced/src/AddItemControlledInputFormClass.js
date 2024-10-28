import { Component } from 'react';

class AddItemForm extends Component {
 constructor(props) {
  super(props);

  // Set intial value for newBrand variable.
  this.state = {
   newBrand: { title: '' },
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);

 }

 // Updates newBrand state as user key in text.
 handleChange(e) {
  this.setState({
   newBrand: { title: e.target.value }
  });
 }

 // Executes onSubmit action when Add brand is clicked.
 handleClick(e) {
  e.preventDefault();

  console.log('handleClick - before onSubmit');
  console.log(this.state.newBrand.title);

  // Call the onSubmit function to pass in the variable to update the state.
  this.props.onSubmit(this.state.newBrand);

  console.log('handleClick - after onSubmit');

  // Reset the newBrand value.
  this.setState({
   newBrand: { title: '' },
  })

 }

 render() {
  return (
   <>
    <div className='container'>
     <div className='mt-3 mb-3'>
      <form classaName='form-inline'>

       <input
        type='text'
        className='form-control-inline'
        value={this.state.newBrand.title}
        onChange={this.handleChange}
       />

       <div className="clearfix"></div>

       <button
        className='btn btn-primary mt-3'
        onClick={this.handleClick}
       >{this.props.buttonText}
       </button>

      </form>
     </div>
    </div>
   </>
  );
 }
}
export default AddItemForm;