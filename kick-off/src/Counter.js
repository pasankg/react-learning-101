// Import react states. It is a hook.
import { useState } from 'react';

function Counter(props) {
 // useState() returns a stateful value, and a function to update it.
 /*
 During the initial render, the returned state (counter) is the same as the value passed as the first argument (props.startAt).
 The setState function is used to update the state. 
 It accepts a new state value and enqueues a re-render of the component.
 */

 /* In other words;
  Param 1 is the variable we need to keep track of.
  Param 2 is the function that will set the new value for the Param 1
  Initial value for counter will be props.startAt
 */
 let [counter, setCounter] = useState(props.startAt);

 // Create automatic setCounter function.
 // setTimeout(() => setCounter(counter += props.countBy), 1000);

 // Manual setCounter function.
 function countUp() {
  setCounter(counter + props.countBy)
 }
 function countDown() {
  setCounter(counter - props.countBy)
 }

 return (
  <>
   <p>Start At: {props.startAt}</p>
   <p>Count By: {props.countBy}</p>
   <h4>{counter}</h4>

   {/* Props are camelcased, therefore instead of onclick, use onClick */}
   <button className='btn btn-primary' onClick={countUp}>Count Up</button>
   <button className='btn btn-danger' onClick={countDown}>Count Down</button>

  </>
 );
}

Counter.defaultProps = {
 startAt: 0,
 countBy: 1
}

export default Counter;