import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    marked: PropTypes.number,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    cbMarked: PropTypes.func.isRequired,
    cbRemove: PropTypes.func.isRequired,
    cbEdit: PropTypes.func.isRequired,
  }

  removeItem = (EO) => {
    EO.stopPropagation();
    this.props.cbRemove(this.props.id);
  }

  productMarked = () => {
    this.props.cbMarked(this.props.id);
  }

  editItem = () => {
    this.props.cbEdit(this.props.id);
  }

  render() {

    let classNames = ['product-item'];

    if(this.props.marked === this.props.id) {
      classNames.push('marked');
    }

    return (
      <tr className={classNames.join(' ')} onClick={this.productMarked}>
        <td>{this.props.id}</td>
        <td>{this.props.productName}</td>
        <td>{this.props.price }</td>
        <td>{this.props.imageUrl}</td>
        <td>{this.props.quantity}</td>
        <td>
          <button  type="button" onClick={this.editItem}>Edit</button>
          <button  type="button" onClick={this.removeItem}>Delete</button>
        </td>
      </tr>
    )
  }


}

export default Product;