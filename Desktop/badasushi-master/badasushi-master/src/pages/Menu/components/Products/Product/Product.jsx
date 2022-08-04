import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import "@fontsource/dosis"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './modal.css'
import {allproducts} from '../Products.jsx'


const Product = ({ product, onAddToCart, onSelected }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);
    



    return (
      
      <Card style ={{display:'flex', objectFit:'contain', borderStyle:'solid 1px', borderWidth:'1px'}}>
          <link rel="stylesheet" href="https://use.typekit.net/nee5kxp.css"/>

        <img onClick={onSelected} className='foodimg' style={{ height:'8vw', objectFit:'cover', width:'8vw', left:'10vw'}} src={product.image.url} alt={product.name}></img>
        <CardContent style= {{height:'110px', width:'8vw'}}>
          <div style={{}}>
            <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:'century-gothic', fontWeight:'700', paddingLeft:'1.5vw', fontSize:'1.2vw'}}>
              {product.name}
            </Typography>
            
          </div>

          {/*<Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />*/}
        </CardContent>
        <div style={{textAlign:'center', position:'relative', right:'-10%', top:'2vh'}}>
          <CardActions>
            
          <div>  
            <div style={{fontFamily:'dosis'}}>
              ${product.price.formatted}
            </div>
              <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                
                <ShoppingBag />
              </IconButton>
          </div>
          </CardActions>
        </div>

      </Card>
    );
    
  
  

  
};

export default Product;

