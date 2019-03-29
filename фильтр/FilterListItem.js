var FilterList = React.createClass({

    displayName: 'FilterList',

    propTypes: {
        text: React.PropTypes.string.isRequired
    },

    render: function () {
        return React.DOM.li({className: "ListItem"}, this.props.text);
    }
});