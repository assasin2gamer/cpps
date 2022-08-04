import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import "@fontsource/dosis"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './modal.css'
import Products, {allproducts} from '../Products.jsx'

export default function Modal ({product, isOpen, onClose, onSelectProduct, onAddToCart})
{
    if (!product) return null;
    let product2 = JSON.stringify(product.description)
    product2=JSON.parse(product2)
    
    product2 = product2.slice(3)
    product2 = product2.slice(0, -4)
    product2 = JSON.parse(product2)
    product2 = product2['description']
    
    var index = 0
    console.log(product)
    for (let item of allproducts) {
        console.log(item)
      if (item.name == product.name)
        break;
      else
        index++;
    }

    
    const next = () => {
        
        let newIndex = index + 1;
        if (newIndex < allproducts.length)
            onSelectProduct(allproducts[newIndex])
    }

    const previous = () => {
        
        let newIndex = index - 1;
        if (newIndex >= 0)
            onSelectProduct(allproducts[newIndex])
        
    }
    

    return (
    <Popup open={isOpen} onClose={onClose} closeOnDocumentClick modal>
      <div className="modal">
        <button className="close" style={{width: '3vw', color:"black"}} onClick={onClose}>
          &times;
        </button>
        <div className="header"> {product.name} </div>
        <div className="content">
          
          <button className="left" style={{width: '3vw', color:"black"}} onClick={previous}>
          &lt;
          </button>
          <button className="right" style={{width: '3vw', color:"black"}} onClick={next}>
          &gt;
          </button>
          
          <div className='productdescription'>
          <img className='foodimgModal' style={{ height:'15vw', objectFit:'cover', width:'30vw'}} src={product.image.url} alt={product.name}></img>
          
          <br></br>
          {product2}
          <br></br>
          Protein:
          <br></br>
          Carbs:
          <br></br>
          Fat:
          </div>

          
          


        </div>
        <div className="actions">
          
          <button
            className="button"
            onClick={() => {
              onAddToCart(product);
            }}
          >
            Add Item to Cart
          </button>
        </div>
      </div>
    </Popup>
    )
}