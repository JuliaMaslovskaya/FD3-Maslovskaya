var ShopItem = React.createClass({

  displayName: 'ShopTable',

  propTypes: {
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      urlFoto: React.PropTypes.string.isRequired,
      number: React.PropTypes.number.isRequired,
      onItemClick: React.PropTypes.func.isRequired,
      onItemDelete: React.PropTypes.func.isRequired,
      selectedItemId: React.PropTypes.any,
  },

  onItemClickFunc: function (EO) {
      this.props.onItemClick(this.props.id);
  },

  onItemDeleteFunc: function (EO) {
      if(confirm('DELETE?')){
      this.props.onItemDelete(this.props.id);}
      EO.stopPropagation();
  },

  render: function () {
     var {id, selectedItemId} = this.props;

      return  React.DOM.tbody({},
      React.DOM.tr({
              className: `shop-table${(!!selectedItemId && selectedItemId === id) ? ` selected` : ``}`,
              id: this.props.id,
              onClick: this.onItemClickFunc
          },
          React.DOM.td({className: 'name'}, this.props.name),
          React.DOM.td({className: 'price'}, this.props.price),
          React.DOM.td({className: 'link'}, this.props.urlFoto),
          React.DOM.td({className: 'quantity'}, this.props.number),
          React.DOM.td({className: 'delete'}, React.DOM.input({type:'button', value:'Delete', onClick: this.onItemDeleteFunc},))
         ,
      ));
  }
});