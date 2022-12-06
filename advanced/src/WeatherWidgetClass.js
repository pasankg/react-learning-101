import { Component } from 'react';

class WeatherWidget extends Component {

 constructor(props) {
  super(props);

  this.state = {
   data: null
  }
 }

 // Load event for the component.
 // Only execute once at mount, Not every time the class renders.
 componentDidMount() {
  if (this.props.location) {
   console.log('Request made in componentDidMount')
  }
 }

 /*
 prevProps:
  Props that were in the component before it was updated
 prevState:
  Information before component was updated.
 Snapshot:
  Another method to get snapshot.
 */
 componentDidUpdate(prevProps, prevState, snapshot) {
  if (prevProps.location !== this.props.location) {
   console.log('Request made in componentDidUpdate');
  }
 }

 render() {
  console.log('Render occured')
  return (
   <>
   </>
  );
 }
}

export default WeatherWidget;