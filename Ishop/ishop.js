var Ishop = React.createClass({

    displayName: 'Ishop',
  
    getDefaultProps: function() {
      return { list: "Список товаров" }
    },
  
    render: function() {
  
      var shops=[];
      var arr = [ {id:'ID',name:'Название товара',price:"Цена",urlFoto:"URL Фото", number:"Количество на складе"}, ]
      arr.forEach(function(item, i) {
            var firstLine =
            React.DOM.tbody({key:item.id,className:'Shops'},
            React.DOM.tr({},
            React.DOM.th({className:'ID'},item.id),
            React.DOM.th({className:'Name'},item.name),
            React.DOM.th({className:'Price'},item.price),
            React.DOM.th({className:'UrlFoto'},item.urlFoto),
            React.DOM.th({className:'Number'},item.number),))
            shops.push(firstLine);
      }),
      this.props.table.forEach(function(item) {
               var tables=  
               React.DOM.tbody({key:item.id,className:'Shops'},    
            React.DOM.tr({},
            React.DOM.td({className:'ID'},item.id),
            React.DOM.td({className:'Name'},item.name),
            React.DOM.td({className:'Price'},item.price),
            React.DOM.td({className:'UrlFoto'},item.urlFoto), 
            React.DOM.td({className:'Number'},item.number),
          ));
          shops.push(tables);
      });
      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'List'}, this.props.list),
        React.DOM.table({className:'Shop'}, shops),
        
        
      );
    },
  
  });