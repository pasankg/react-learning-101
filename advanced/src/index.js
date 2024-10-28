import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherApp from './WeatherApp'

const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  console.log('development environment')
}

root.render(
  <>
    <App />
    <hr />
    <WeatherApp />
  </>
);
