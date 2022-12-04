import { useState } from 'react';
import List from './List';
import AddItemForm from './AddItemFormClass';

function App() {
  const [brands, setBrands] = useState(['Honda', 'KTM']);

  function updateBrands(newBrand) {
    console.log('updateBrands - onSubmit');
    setBrands([...brands, newBrand]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className='container'>
          <AddItemForm buttonText="Add Brand" onSubmit={updateBrands} />
        </div>
        <div className='container'>
          <List title="Motorcycle Brands" items={brands} />
        </div>
      </div>
    </div>
  );
}

export default App;
