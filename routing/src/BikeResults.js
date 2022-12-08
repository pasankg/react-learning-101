/* 
  Outlet; this component tells react router to where to inject the content.
 */
import { Outlet } from 'react-router-dom';

// To retrieve the parameter from the URL we need to use a hook.
import { useParams } from 'react-router-dom';

export default function BikeResults() {
  const params = useParams();
  return (
    <>      
      <h4>This is the Bike Result Page</h4>
      <p>This is a child route of ./BikesLayout</p>
      <p>It inherits data from ./App file</p>

      <p>The parameter for ':bikeTopic' is <b>{params.bikeTopic}</b></p>
    </>
  );
}