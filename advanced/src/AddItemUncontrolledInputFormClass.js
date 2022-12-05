import React from 'react';

class AddItemUnControlledForm extends React.Component {
 constructor(props) {
  super(props);

  /*
   For controlled inputs we use states.
   But for uncontrolled inputs we can use refs.
   */
  this.brandName = React.createRef(null);
  this.categoryName = React.createRef(null);

  this.handleClick = this.handleClick.bind(this);

 }

 // Executes onSubmit action when Add brand is clicked.
 handleClick(e) {
  e.preventDefault();

  // Get values from the refs.
  let brand = this.brandName.current.value;
  let category = this.categoryName.current.value;

  // Call the onSubmit function to pass in the variable to update the state.
  this.props.onSubmit({
   title: brand,
   text: category
  });
  this.brandName.current.value = '';
  this.categoryName.current.value = '';
  this.brandName.current.focus();
 }

 render() {
  return (
   <>
    <div className='container'>
     <div className='mt-3 mb-3'>
      <form classaName='form-inline'>

       <div className="form-group mb-2">
        <label className='sr-only'>Brand:</label>
        <input
         ref={this.brandName}
         type='text'
         className='form-control-inline'
        />
       </div>

       <div className="form-group mb-2">
        <label className='mr-sm-2'>Category:</label>
        <select
         ref={this.categoryName}
         className='custom-select mr-sm-2'
        >
         <option value=''></option>
         <option value='adv'>Adventure</option>
         <option value='sports'>Sports</option>
         <option value='touring'>Touring</option>
        </select>
       </div>

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
export default AddItemUnControlledForm;