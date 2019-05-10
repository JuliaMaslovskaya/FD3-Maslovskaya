import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';

const products = require('./products.json');
const shopName = 'ISHOP';
ReactDOM.render(
  <ProductList
    products = {products}
    shopName = {shopName}
  />
  , document.getElementById('root') 
);