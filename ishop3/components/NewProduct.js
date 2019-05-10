import React from 'react';
import PropTypes from 'prop-types';

class NewProduct extends React.Component {

  static propTypes = {
    itemID: PropTypes.number.isRequired,
    cbReturnMode: PropTypes.func.isRequired,
    cbSaveProduct: PropTypes.func.isRequired,
  }

  state = {
    productName: '',
    price: '',
    imageUrl: '',
    quantity: '',
    itemID: this.props.itemID,
    formErrors: {
      productName: '',
      price: '',
      imageUrl: '',
      quantity: ''
    },
    productNameValid: false,
    priceValid: false,
    imageUrlValid: false,
    quantityValid: false,
    formValid: false
  }

  returnWorkMode = () => {
    this.props.cbReturnMode();
  }

  handleChange = (EO) => {
    const name = EO.target.name;
    const value = EO.target.value;

    this.setState({[name]: value}, () => {
      this.validateField(name, value)
    });
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let productNameValid = this.state.productNameValid;
    let priceValid = this.state.priceValid;
    let imageUrlValid = this.state.imageUrlValid;
    let quantityValid = this.state.quantityValid;

    switch(fieldName) {
      case 'productName':
        productNameValid = value.length > 0;
        fieldValidationErrors.productName = productNameValid ? '' : 'Please, fill the field. Value must be a string.';
        break;
      case 'price':
        priceValid = value.length > 0;
        fieldValidationErrors.price = priceValid ? '' : 'Please, fill the field. Value must be a rational number greater than 0.';
        break;
      case 'imageUrl':
        imageUrlValid = value.length>0;
        fieldValidationErrors.imageUrl = imageUrlValid ? '' : 'Please, fill the field. Valye be a valid URL';
        break;
      case 'quantity':
        quantityValid = value.length > 0;
        fieldValidationErrors.quantity = quantityValid ? '' : 'Please, fill the field. Value must be a pasitive integer.';
        break;
    }
    
    this.setState({
      formErrors: fieldValidationErrors,
      productNameValid: productNameValid,
      priceValid: priceValid,
      imageUrlValid: imageUrlValid,
      quantityValid: quantityValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      formValid: this.state.productNameValid && this.state.priceValid &&
                  this.state.imageUrlValid && this.state.quantityValid
    });
  }

  saveProduct = (EO) => {
    EO.preventDefault();
    const isValid = this.state.formValid;

    if(isValid) {
      this.props.cbSaveProduct(this.state);
    }
  }

  render() {
    
    return (
      <div className="product-card mode">
        <h2>Add new Product</h2>
        <form onSubmit={this.saveProduct}>
          <div className="form-group">
            <label>{'ID: ' + this.state.itemID}</label>
          </div>
          
          <div className="form-group">
            <label>Name: </label>
            <input type="text" name="productName" defaultValue={this.state.productName} onChange={this.handleChange}  />
            <div className="formErrors">{this.state.formErrors.productName}</div>
          </div>

          <div className="form-group">
            <label>Price: </label>
              <input type="text" name="price" defaultValue={this.state.price} onChange={this.handleChange} />
            <div className="formErrors">{this.state.formErrors.price}</div>
          </div>

          <div className="form-group">
            <label>Url:</label> 
            <input  type="text" name="imageUrl" defaultValue={this.state.imageUrl} onChange={this.handleChange}/>
            <div className="formErrors">{this.state.formErrors.imageUrl}</div>
          </div>

          <div className="form-group">
            <label>Quantity:</label> 
            <input type="text" name="quantity" defaultValue={this.state.quantity} onChange={this.handleChange}/>
            <div className="formErrors">{this.state.formErrors.quantity}</div>
          </div>

          <div className="form-group text-right">
            <button type="submit"  disabled={!this.state.formValid}>Add</button>
            <button type="button"  onClick={this.returnWorkMode}>Cancel</button>
          </div>

        </form>
      </div>
    )
  }
}

export default NewProduct;