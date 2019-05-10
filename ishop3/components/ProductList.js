import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import ProductCard from './ProductCard';
import NewProduct from './NewProduct';

import './ProductList.css';

class ProductList extends React.Component {
  
  static propTypes = {
    shopName: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    )
  }

  state = {
    products: this.props.products,
    markedProductCode: null,
    selectedProductCode: null,
    productWorkMode: 1,
  }

  handleRemoveProduct = (id) => {
    let question = confirm('Do you want to detete it?');

    if(question) {
      this.setState(prevState => ({
        products: prevState.products.filter(product => product.id !== id)
      }));
    }
  }

  handleMarked = (id) => {
    if(this.state.productWorkMode !== 2) {
      this.setState({markedProductCode: id});
    }
  }

  handleEditProduct = (id) => {
    if(this.state.productWorkMode !== 2) {
      this.setState({
        productWorkMode: 2,
        selectedProductCode: id,
        markedProductCode: id
      });
    }
  }

  handleAddProduct =  () => {
    this.setState({productWorkMode: 3});
  }

  handleReturnWorkMode = () => {
    this.setState({productWorkMode: 1});
  }

  handleSaveProduct = (stateCard, id) => {
    const products = this.state.products.slice();
    const product = products.find(p => p.id === id);

    product.productName = stateCard.productName;
    product.price = Number(stateCard.price);
    product.imageUrl = stateCard.imageUrl;
    product.quantity = Number(stateCard.quantity);

    this.setState({
      products: products,
      productWorkMode: 1
    });
  }

  handleSaveNewProduct = (stateNewCard) => {
    const products = this.state.products.slice();
    const newProduct = {
      id: stateNewCard.itemID,
      productName: stateNewCard.productName,
      price: Number(stateNewCard.price),
      imageUrl: stateNewCard.imageUrl,
      quantity: Number(stateNewCard.quantity)
    }

    products.push(newProduct);
    
    this.setState({
      products: products,
      productWorkMode: 1
    });
  }

  render() {

    const productItem = this.state.products.map( product => 
      <Product 
        key={product.id}
        productName={product.productName} 
        price={product.price}
        imageUrl={product.imageUrl} 
        quantity={product.quantity} 
        id={product.id}
        marked={this.state.markedProductCode}
        cbMarked={this.handleMarked}
        cbRemove={this.handleRemoveProduct}
        cbEdit={this.handleEditProduct}
      />
    );

    const productCard = this.state.products.map( product =>
      <ProductCard
        key={product.id}
        productName={product.productName} 
        price={product.price}
        imageUrl={product.imageUrl} 
        quantity={product.quantity} 
        id={product.id}
        marked={this.state.markedProductCode}
        productWorkMode={this.state.productWorkMode}
        selectedProductCode={this.state.selectedProductCode}
        cbReturnMode={this.handleReturnWorkMode}
        cbSaveProduct={this.handleSaveProduct}
      />
    );

    let itemID = this.state.products[this.state.products.length -1].id;
    itemID++
    
    return(
      <div className="container">
        <h1>{this.props.shopName}</h1>
        <table className="product-list" border="1">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>image Url</th>
              <th>Quantity</th>
              <th>Control</th>
            </tr>
            { productItem }
          </tbody>
        </table>
        <button type="button"  onClick={this.handleAddProduct}>New product</button>
        { productCard }
        {
          (this.state.productWorkMode === 3) &&
          <NewProduct 
            itemID={itemID}
            cbReturnMode={this.handleReturnWorkMode}
            cbSaveProduct={this.handleSaveNewProduct}
          />
        }
      </div>
    )
  }
}

export default ProductList;