import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import './vis.css'
import Product from './Product/Product';
import {BrowserView, MobileView} from 'react-device-detect';
import Modal from '../Products/Product/Modal';

var allproducts;
<link rel="stylesheet" href="https://use.typekit.net/nee5kxp.css"/>


const Products = ({ products, onAddToCart, tag }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const selectProduct = (product) => {
    setModalOpen(true);
    setSelectedProduct(product);
  }

  allproducts = products;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const url_tag = urlParams.get('product')

  const checker = (product) => {
  
    let product2 = JSON.stringify(product)
    
    product2 = JSON.parse(product2)
    product2 = product2['description']
    product2 = product2.slice(3)
    product2 = product2.slice(0, -4)
    product2 = JSON.parse(product2)
    
  
    let product_tag = null
  
    try{
      product_tag = product2['tag']
      if (product_tag == url_tag){
        return(
          <Grid style={{top:""}} key={product.id} item xs={12} sm={1} md={4} lg={5}>
                <Product product={product} onSelected = {() => {selectProduct(product)}} onAddToCart={onAddToCart} />
              </Grid>
        )
      }

      if (url_tag == "all"){
        return(
          <Grid style={{top:""}} key={product.id} item xs={12} sm={1} md={4} lg={5}>
                <Product product={product} onSelected = {() => {selectProduct(product)}} onAddToCart={onAddToCart} />
              </Grid>
        )
      }
      
    }
    catch{
      return null
    }

    

  }

  if (!products.length) return (
    <div style={{height:'200vh', backgroundColor:'white', transition:'width 2s'}}>
      
    </div>
  );

  return (
    <div style={{}}>
      <BrowserView>
        <main style={{}}>
        <Modal  onSelectProduct={selectProduct} product={selectedProduct} isOpen={modalOpen} onAddToCart={onAddToCart} onClose={() => {setModalOpen(false)}}/>
          <div  />
          <Grid className="fadein" style = {{position:'relative', top:'10vh', borderRadius:'1%', width:"90vw", overflowX:'hidden', left:'5vw', transition:'width 5s'}} container  spacing={10}>
          
            {products.map((product) => checker(product))}
          
          </Grid>
        </main>
      </BrowserView>
      <MobileView>
      <main >
          <div  />
          <Grid style = {{position:'relative', paddingRight:'10vw',paddingLeft:'10vw', top:'5vh'}} container  spacing={10}>
          
            {products.map((product) => checker(product))}
          
          </Grid>
        </main>
      </MobileView>
    </div>
  );
};

export default Products;

export {allproducts};
