
/*** v1.0 ************************************
**** Code proior the use of Layout ***********
**** in navigation using Outlet component ****
**** Same modification goes to other files ***
**** such as JavascriptNews.js, ReactNews.js *
**********************************************

import Navbar from './Navbar'
export default function Home(props) {
 return (
  <>
   <Navbar />
   <div className="container">
    <div className='row'>
     <h5>Home Page</h5>
    </div>
   </div>
  </>
 );
}

*********************************************/

export default function Home(props) {
 return (
  <>
   <h5>Home Page</h5>
  </>
 );
}
