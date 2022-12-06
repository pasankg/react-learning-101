import { useState, useRef } from 'react';
import WeatherWidget from './WeatherWidgetClass';

function WeatherApp() {
 // Initial location is set here.
 const [location, setLocation] = useState('Colombo');

 /* 
Using refs so that the form can have uncontrolled input
which will only update data upon form submit and not on value change.
*/
 const locationInput = useRef(null);

 function handleClick(e) {
  e.preventDefault();
  setLocation(locationInput.current.value);
 }

 return (
  <>
   <div className='container'>
    <div className='row justify-content-md-center'>
     <div style={{ width: '20rem' }}>
      <form className='row row-cols-lg-auto align-items-center mb-3'>
       <div className='col-12'>
        <input
         type='text'
         className='form-control'
         ref={locationInput}
        />
       </div>
       <div className='col-12'>
        <button
         className='btn btn-primary'
         onClick={handleClick}
        >
         Get
        </button>
       </div>
      </form>
      <WeatherWidget location={location} />
     </div>
    </div>
   </div>
  </>
 );

}
export default WeatherApp;