import {
  BrowserRouter,
  Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import ProductList from './Components/ProductList';
import AppProvider from './Components/AppProvider';

function App() {
  return (
    <div className="App latest">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
