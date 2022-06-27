import React, { Component } from "react";
import stripHtml from 'string-strip-html';
import PropTypes from 'prop-types';




const ProductItem = ({ product }) => {

  let description= stripHtml(product.description);
  

  let jdescrp = JSON.stringify(description)
  jdescrp = JSON.parse(jdescrp)
  jdescrp = JSON.parse(jdescrp)

  console.log(jdescrp)


  return (
    <div className="product__card">
      <img className="product__image" src={product.image.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <p className="product__description">
        <button> Learn more</button>
        <button>Add to cart</button>
        </p>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div> 
  );
};




ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;