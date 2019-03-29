var Filter = React.createClass({

  displayName: 'Filter',

  propTypes: {
      list: React.PropTypes.array.isRequired
  },

  getInitialState: function () {
      return {
          items: this.props.list,
         //isclick: false,
          isChecked: false,
          curValue: '',
      };
  },

  inputChanged: function (EO) {
      this.setState({curValue: EO.target.value}, this.updateList);
  },

  checkBoxClicked: function (EO) {
      this.setState({isChecked: EO.target.checked}, this.updateList);
  },

  updateList: function () {
      var {isChecked, curValue, isclick} = this.state;

      curList = curValue ?
          this.props.list
              .slice()
              .filter(value => value.toLowerCase().indexOf(curValue.toLowerCase()) > -1)
          :
          this.props.list
              .slice();
      curList = isChecked ? curList.sort() : curList;
      curList = isclick ? this.props.list.slice() : curList ;
      this.setState({items: curList});
      
  },
inputClick: function(EO){
    //this.setState({isclick: EO.target.click}, this.updateList);
this.setState({curValue:"",isChecked:false},this.updateList)}
,

  render: function () {
      var items = this.state.items
          .map(value => React.createElement(FilterList, {key: value, text: value}));

      return React.DOM.div({className: 'filter'},
          React.DOM.input({type: 'checkbox', Checked: this.state.isChecked, onClick: this.checkBoxClicked}),
          React.DOM.input({type: 'text', Value: this.state.curValue, onChange: this.inputChanged}),
          React.DOM.input({type: 'button', value:'Сброс', onClick: this.inputClick}),
          React.DOM.ul({className: 'filter-list'}, items),
      );
  }
});
    