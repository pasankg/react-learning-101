import { useState } from 'react';
import Navbar from './Navbar';
import List from './List';
import AddItemForm from './AddItemControlledInputFormClass';
import AddItemFormUncontrolled from './AddItemUncontrolledInputFormClass';

function App() {
  const [brands, setBrands] = useState([{ title: 'Honda' }, { title: 'KTM' }]);

  function updateBrands(newBrand) {
    console.log('updateBrands - onSubmit');
    // Add the new brand to the brands array.
    setBrands([...brands, newBrand]);
  }

  return (
    <>      
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <AddItemForm buttonText="Add Brand" onSubmit={updateBrands} />
          <List title="Motorcycle Brands" items={brands} />
        </div>

        <hr></hr>

        <div className="row">
          <AddItemFormUncontrolled buttonText="Add Brand" onSubmit={updateBrands} />
          <List title="Motorcycle Brands" items={brands} />
        </div>
      </div>
    </>
  );
}

export default App;
