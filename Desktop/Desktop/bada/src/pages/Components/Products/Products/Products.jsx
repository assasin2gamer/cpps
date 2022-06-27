import React from 'react';


import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <div></div>
  );
};

export default Products;

