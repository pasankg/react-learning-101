/* 
  Outlet; this component tells react router to where to inject the content.
 */
import { Outlet } from 'react-router-dom';

export default function BikesLayout(props) {
  return (
    <>
      <h4>This is from the Bikes Layout</h4>
      <Outlet />
    </>
  );
}