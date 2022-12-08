// We create this Layout function to load the common content.
// This will hold the main layout of the application and we can pass 
// the data using the Outlet hook.

import Navbar from './Navbar'
/* 
  Outlet; this component tells react router to where to inject the content.
 */
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}