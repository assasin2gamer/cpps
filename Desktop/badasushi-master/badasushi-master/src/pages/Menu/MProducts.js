import React, { useState, useEffect } from "react";


import {Link} from 'react-router-dom'

import { ShoppingCart, Home } from '@mui/icons-material';
import {BrowserView, MobileView} from 'react-device-detect';


import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import Commerce from '@chec/commerce.js';

import './styles/scss/styles.scss';

import Cart from "./components/Cart/Cart"
import Checkout from "./components/CheckoutForm/Checkout/Checkout"
import  Navbar from "../NavBar/Navbar.js";
import VisProducts from "./components/Products/VisProducts";
import kbg from "./assets/korean.jpeg"


function square(){
    
}  
const commerce = new Commerce("pk_443954304ed80924c5b6eacfb7438c27952d8da408049", true);

export {commerce}



const MProduct = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };




  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

/*<Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route> */
  let tag = "all"

  var base_link = window.location.origin;


  return (

    <div style={{backgroundColor:'white', height:'100%'}}>
      <BrowserView>
      <div style={{position:'absolute', top:'10vh', left:'1vw', zIndex:'1'}}>
        <a href={base_link+'/login'}  style={{textDecoration: 'none', fontSize:'2vw', color:'black', paddingLeft:'2vw', fontFamily:'Quicksand'}}>Login</a>
      </div>
      <div style={{height:'10vh', textAlign:'left', left:'55vw', position: 'relative', top:'10vh', zIndex:'2', width:'40vw'}}>

            <a href={base_link+'/'}  style={{textDecoration: 'none', fontSize:'30px', color:'black', paddingLeft:'30px', fontFamily:'Quicksand'}}>Home</a>
            <a href={base_link+'/vis-menu'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}>Menu</a>
            <a href={base_link+'/about'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}>About Us</a>
            <a href={base_link+'/contact-us'} className="nav-text" style={{color:'black', fontFamily:'Quicksand'}}> Contact Us</a>
            <a href={base_link+'/cart'}>
              <ShoppingCart style={{position:'relative', left:'3vw', color:'black'}}/>
            </a>

        </div>
        <div style = {{width:'100vw'}}>
          
          <a style={{width:'50px', paddingRight:'10px'}} href={base_link+'/cart'}>
           
          </a>
          <a style={{width:'50px', paddingRight:'10px'}} href={base_link+'/'}>
            
          </a>
          

          <div style={{position:'relative', display:'flex',overflowX:'clip'}}>
            <div style={{display:'', textAlign:'center', justifyContent:'space-between', top:'10vh', position:'relative', borderStyle:'solid', borderRadius:'1vw', left:'1vw', height:'35vh'}}>
              <a style={{width:'5vw', color:'black'}} href={base_link+'/menu/?product=sushi'}><button style={{backgroundColor:'white', borderBottomStyle:'solid', color:'black'}}>Sushi</button></a>
              <a style={{width:'5vw', color:'black'}} href={base_link+'/menu/?product=dishes'}><button style={{backgroundColor:'white', borderBottomStyle:'solid', color:'black'}}>Dishes</button></a>
              <a style={{width:'5vw', color:'black'}} href={base_link+'/menu/?product=korean'}><button style={{backgroundColor:'white', borderBottomStyle:'solid', color:'black'}}>Korean</button></a>
              <a style={{width:'5vw', color:'black'}} href={base_link+'/menu/?product=macaron'}><button style={{backgroundColor:'white', borderBottomStyle:'solid', color:'black'}}>Macaron</button></a>
          </div>

            <VisProducts style={{borderStyle:'solid', borderRadius:'10%', paddingRight:'10px'}} products={products} onAddToCart={handleAddToCart} qry = {tag} handleUpdateCartQty/>
            
          </div> 
        </div>
        <div style={{height:'40vh', top:'0vh', position:'relative'}}>
          <div>
            
          </div>
        </div>
      </BrowserView>
      <MobileView>
        
        <div>
          <div style={{position:'fixed', zIndex:'1', bottom:'1vh', right:'4vw'}}> 
            <a href={base_link+'/cart'}>
              
                <ShoppingCart style={{width:"10vw", height:'10vh', color:"black", borderStyle:"solid", backgroundColor:'white'}}/>
              
            </a>
          </div>
          <div style={{zIndex:-1}}>
            <VisProducts style={{position:'relative', top:'10vh',}} products={products} onAddToCart={handleAddToCart} qry = {tag} handleUpdateCartQty />
          </div>
            
            
          </div> 
        

      </MobileView>
    </div>
  )
};



export default MProduct;