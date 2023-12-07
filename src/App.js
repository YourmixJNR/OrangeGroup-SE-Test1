import { BrowserRouter,
        Router, 
        Routes, 
        Route } from 'react-router-dom';

import './App.css';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
