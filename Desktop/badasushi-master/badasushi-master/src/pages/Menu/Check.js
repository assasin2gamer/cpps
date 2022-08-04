import React, { useState, useEffect } from "react";




import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import Commerce from '@chec/commerce.js';

import './styles/scss/styles.scss';

import Cart from "./components/Cart/Cart"
import Checkout from "./components/CheckoutForm/Checkout/Checkout"
import  Navbar  from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
const commerce = new Commerce("pk_443954304ed80924c5b6eacfb7438c27952d8da408049", true);

 




const Check = () => {

  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
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
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
      </div>
 
  )
};



export default Check;