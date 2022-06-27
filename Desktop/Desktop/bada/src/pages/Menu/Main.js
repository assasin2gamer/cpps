import React, { useState, useEffect } from "react";
import commerce from './lib/Commerce';

import './styles/scss/styles.scss';

import ProductsList from './components/ProductsList';

function square(){
    
}



const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  return (
    <div className="app">
      <ProductsList 
        products={products}
      />
    </div>
  )
};

export default Main;