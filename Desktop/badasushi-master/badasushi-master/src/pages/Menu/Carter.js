import React, { useState, useEffect } from "react";






import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import Commerce from '@chec/commerce.js';

import './styles/scss/styles.scss';
import {commerce} from './Products'

import Cart from "./components/Cart/Cart"
import Checkout from "./components/CheckoutForm/Checkout/Checkout"
import  Navbar  from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function square(){
    
}  




const Carter = () => {
  const [cart, setCart] = useState({});
  


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };



  useEffect(() => {
    fetchCart();
  }, []);


/*<Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route> */
  return (

      <div style={{ display: 'flex' }}>
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
      </div>
 
  )
};



export default Carter;