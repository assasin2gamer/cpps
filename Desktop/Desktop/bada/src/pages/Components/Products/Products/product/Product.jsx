import React from 'react';


import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
  <div></div>
  );
};

export default Product;

