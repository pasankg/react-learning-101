import { Component } from 'react';
import styles from './WeatherWidgetFunction.module.css';
class WeatherWidget extends Component {

 constructor(props) {
  super(props);

  this.state = {
   data: null
  }
 }

 fetchData() {
  fetch(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${this.props.location}`)
   .then(res => res.json())
   .then(obj => this.setState({ data: obj }));
 }

 // Load event for the component.
 // Only execute once at mount, Not every time the class renders.
 componentDidMount() {
  if (this.props.location) { 
   console.log('Request made in componentDidMount')
   this.fetchData();
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
   this.fetchData();
  }
 }

 render() {
  console.log('Render occured')
  let data = this.state.data;
  console.log('Render Data', data);

  if (!data) {
   return <></>;
  }

  return (
   <>
    <div className='card'>
     <div className={styles.cardBodyCenter}>
      <img className='img-fluid' src={data.current.weather_icons[0]} alt='icon' />
      <h5 className='card-title'>
       {data.location.name}
      </h5>
     </div>
     <ul className='list-group list-group-flush'>
      <li className='list-group-item'>Temp: {data.current.temperature}</li>
      <li className='list-group-item'>{data.current.weather_descriptions[0]}</li>
      <li className='list-group-item'>Wind: {data.current.wind_speed} {data.current.wind_dir}</li>
      <li className='list-group-item'>Humidity: {data.current.humidity}</li>
     </ul>

    </div>
   </>
  );
 }
}

export default WeatherWidget;