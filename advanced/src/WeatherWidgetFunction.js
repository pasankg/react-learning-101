/* 
 To use side effects inside of a function we need useEffect.
 Side effects are processes that an application should do other than
 just displaying things in the UI.
 i.e. send requests, saving to local, caching, logging etc.
*/
import { useState, useEffect } from 'react';
import styles from './WeatherWidgetFunction.module.css';

// Destructure props so that we can directly use location instead of props.location.
function WeatherWidgetFunction({ location }) {
  // The function itself behaves same as the render() method in a class

  // data variable will be tracked and 
  const [data, setData] = useState(null);

  /* 
   Using effects.
   Accepsts two parameters.
   Argument 1: A function.
 
   Argument 2: An array of variables that could change and 
    if they do change, trigger the effect. Same as componentDidUpdate()
    If an empty array is passed, it will have the same behaviour as componentDidMount().
  */
  useEffect(() => {
    // Check location exists.
    if (location && location !== '') {
      console.log('Request made.')

      /*
        By default react will read the .env file for any environment variables.
        And to access them we need to add a prefix `REACT_APP_` to the name.
        More info can be found at;
         - https://create-react-app.dev/docs/adding-custom-environment-variables/
        Advanced use can be done through this package.
        - https://www.npmjs.com/package/react-app-env
      */
      fetch(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API_KEY}&query=${location}`)
        .then(res => res.json())
        .then(obj => setData(obj));
    }
  }, [location]); // Watch for location value changes.

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

export default WeatherWidgetFunction;