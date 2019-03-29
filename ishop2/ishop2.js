let Shop = React.createClass({

  displayName: 'Shop',

  getDefaultProps: function () {
      return {shopName: 'Shop'}
  },

  getInitialState: function () {
      return {
          itemList: this.props.propductList
      }
  },

  propTypes: {
      shopName: React.PropTypes.string.isRequired,
      propductList: React.PropTypes.arrayOf(
          React.PropTypes.shape({
              name: React.PropTypes.string.isRequired,
              price: React.PropTypes.number.isRequired,
              urlFoto: React.PropTypes.string.isRequired,
              number: React.PropTypes.number.isRequired,
              code: React.PropTypes.number.isRequired
          })
      )
  },

  onItemClick: function (itemId) {
      this.setState({selectedItemId: itemId});
  },

  onItemDelete: function (itemId) {
      const filtredItems = this.state.itemList.filter(value => value.code !== itemId);

      this.setState({itemList: filtredItems});
  },

  render: function () {

      let shopItems = this.state.itemList.map(shopItem =>
          React.createElement(ShopItem, {
              key: shopItem.code,
              id: shopItem.code,
              name: shopItem.name,
              price: shopItem.price,
              urlFoto: shopItem.urlFoto,
              number: shopItem.number,
              selectedItemId: this.state.selectedItemId,
              onItemClick: this.onItemClick,
              onItemDelete: this.onItemDelete
          })
      );

      return React.DOM.div({className: 'shop'},
          React.DOM.h2({className: 'shopName'}, this.props.shopName),
          React.DOM.table({className: 'table'},
          React.DOM.tbody({className: 'table'},
          
              React.DOM.tr({className: 'tableHeader'},
                  React.DOM.th({className: 'tableHeadeName'}, 'НАЗВАНИЕ ТОВАРА'),
                  React.DOM.th({className: 'tableHeadePrice'}, 'ЦЕНА'),
                  React.DOM.th({className: 'tableHeadeLink'}, 'ССЫЛКА'),
                  React.DOM.th({className: 'tableHeadeNumer'}, 'КОЛИЧЕСТВО'),
                  React.DOM.th({className: 'tableHeadeDelete'}, 'УДАЛИТЬ ТОВАР'),
              )),
              shopItems
          ),
      )
  }
});