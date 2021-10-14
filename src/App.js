import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/routes/Home';
import Cart from '../src/routes/Cart'
import axios from 'axios';

const App = (props) => {

  const getProducts = async () => {
    let response = await axios.get('https://fakestoreapi.com/products');
    let data = await response.data;
    setProducts(data);
  }

  const [products, setProducts] = useState(() => getProducts());

  const [cart, setCart] = useState({
    total: 0,
    size: 0,
    items: {}
  })

  return (
    <div className="App">
    <Navbar cart={cart}/>
    <Switch>
    {/*Router being set up to swap among pages*/}
      <Route exact path='/' render={()=> <Home title={'Home'} products={products} setProducts={setProducts} cart={cart} setCart={setCart}/>}/>
      <Route path='/cart' render={()=> <Cart title={'Cart'} cart={cart} setCart={setCart}/>}/>
    </Switch>

    </div>
  );
}

export default App;
