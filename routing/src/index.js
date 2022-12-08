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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* Tells react to load the layout file by wrapping other Route elements 
      and nesting them, also this acts as the parent.  */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        {/* To create child of the Layout and create children */}
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
    </Routes>
  </Router>

);