/* 
  Outlet; this component tells react router to where to inject the content.
 */
import { Outlet } from 'react-router-dom';

export default function NewsLayout(props) {
  return (
    <>
      <h4>This is the News Layout</h4>
      <p>This is a child route of ./Layout</p>
      <p>It inherits data from ./Layout file</p>
      <Outlet />
    </>
  );
}