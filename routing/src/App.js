// We create this Layout function to load the common content to the navigation.
import NavbarBikes from './NavbarBikes'
/* 
  Outlet; this component tells react router to where to inject the content.
 */
import { Outlet } from 'react-router-dom';

export default function App(props) {
  const topics = ['KTM', 'Ducati', 'BMW'];
  return (
    <>
      <NavbarBikes topics={topics} />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}