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

  const checker = (product, tag) => {
  
    let product2 = JSON.stringify(product)
    
    product2 = JSON.parse(product2)
    product2 = product2['description']
    product2 = product2.slice(3)
    product2 = product2.slice(0, -4)
    product2 = JSON.parse(product2)
    
  
    
  
  
    let product_tag = product2['tag']
      if (product_tag == tag){
        return(
          <Grid style={{position:'relative', left:'6vw'}} key={product.id} item xs={12} sm={1} md={4} lg={5}>
                <Product product={product} onSelected = {() => {selectProduct(product)}} onAddToCart={onAddToCart} />
              </Grid>
        )
      }

  }

  if (!products.length) return(
    <div style={{height:'100vh', backgroundColor:'white', transition:'width 2s'}}>
      
    </div>
  );
  function Sushi(){
    return (
      <Grid style = {{position:'relative', top:'', left:'18vw', justifyContent:'left', borderRadius:'1%', width:"70vw", overflowX:'hidden'}} container  spacing={10}>
            {products.map((product) => checker(product, 'sushi'))}
      </Grid>
    )
  }
  function Dishes(){
    return (
      <Grid style = {{position:'relative', top:'', left:'18vw', justifyContent:'left', borderRadius:'1%', width:"70vw", overflowX:'hidden'}} container  spacing={10}>
            {products.map((product) => checker(product, 'dishes'))}
      </Grid>
    )
  }
  function Korean(){
    return (
      <Grid style = {{position:'relative', top:'', left:'18vw', justifyContent:'left', borderRadius:'1%', width:"70vw", overflowX:'hidden'}} container  spacing={10}>
            {products.map((product) => checker(product, 'korean'))}
      </Grid>
    )
  }

  return (
    
    <div style={{}}>
      <BrowserView>
        <main style={{}}>
        <Modal onSelectProduct={selectProduct} product={selectedProduct} isOpen={modalOpen} onAddToCart={onAddToCart} onClose={() => {setModalOpen(false)}}/>
          <div  />
          <div style={{width:'100vw' }} className='fadein'>
            <div>
              <div style={{textAlign:'center', fontSize:'5vh', borderBottomStyle:'solid', width:'60vw', position:'relative', left:'20vw', fontFamily:'Niagra', paddingTop:'10vh'}}> Korean </div>
              <div style={{height:'5vh'}}></div>
              <Korean style={{height:'100%', paddingBottom:'10vh'}}/>
            </div>
            <div>
              <div style={{textAlign:'center', fontSize:'5vh', borderBottomStyle:'solid', width:'60vw', position:'relative', left:'20vw', fontFamily:'Niagra', paddingTop:'10vh'}}> Sushi </div>
              <div style={{height:'5vh'}}></div>
              <Sushi style={{height:"30vh", }}/>.
            </div>
            <div>
              <div style={{textAlign:'center', fontSize:'5vh', borderBottomStyle:'solid', width:'60vw', position:'relative', left:'20vw', fontFamily:'Niagra', paddingTop:'10vh'}}> Dishes </div>
              <div style={{height:'5vh'}}></div>
              <Dishes/>
            </div>
          </div>
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
