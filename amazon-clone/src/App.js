import Header from './Header';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <div className="App">
       <Header/>

      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/home" index element={<Home />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/contact" />
        </Route>
      </Routes>
    </BrowserRouter>



      
     
    
    </div>
  );
}

export default App;
