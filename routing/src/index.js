import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import router package.
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './Home';
import ReactNews from './ReactNews';
import JavascriptNews from './JavascriptNews';

import Layout from './Layout';
import NewsLayout from './NewsLayout';

import BikesLayout from './BikesLayout';
import BikeResults from './BikeResults';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>

      {/* ******************************* v1.0 ******************************* */}
      {/* Tells react to load the layout file by wrapping other Route elements 
      and nesting them, also this acts as the parent.  */}
      {/* To create child of the Layout we need to wrap elements using Route */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsLayout />}>
          <Route path='react' element={<ReactNews />} />
          <Route path='javascript' element={<JavascriptNews />} />
        </Route>
      </Route>
      {/* 
        We can also set other Layouts for ex.Admin section.
        <Route element={<AdminLayout />} >
          .....
        </Route>      
      */}

      {/* ******************************* v2.0 ******************************* */}

      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        {/* We can have advanced routes like below.
          <Route path='/news/:newsTopic?quesy=:routeParam' element={<BikesLayout />}> 
        */}
        <Route path='/bikes' element={<BikesLayout />}>
          <Route path=":bikeTopic" element={<BikeResults />} />
        </Route>
      </Route>

    </Routes>
  </Router>
);

