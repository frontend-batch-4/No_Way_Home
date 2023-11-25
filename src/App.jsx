import { Routes, Route } from 'react-router-dom'

// pages
// contoh cara import komponen 👇👇👇

import Product from './pages/product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// import NamaKomponen from './pages/NamaKomponen';

export default function App() {
  return (
    <>
      {/*Navbar*/}
      {/*<Navbar/>*/}

      {/*Routing Halaman*/}
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>

      {/*Footer*/}
      {/*<Footer/>*/}
    </>
  );
};