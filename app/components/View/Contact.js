define(function(require, exports, module) {
    // Import
    var React = require('react');
    var ReactBootstrap = require('react-bootstrap');
    var createReactClass = require('create-react-class');
    // Bootstrap Component
    var Navbar = ReactBootstrap.Navbar;
    var Nav = ReactBootstrap.Nav;
    var NavItem = ReactBootstrap.NavItem;
    // Component Style
    var style = {
        root: {},
    };
    // Component
    return Contact = createReactClass({
        displayName: 'Contact',
        handleClickContact: function() {
            alert('contact!!');
        },
        componentDidMount: function() {
            // console.log('[Component] Contact Mounted!!');
            // console.log(this.props);
        },
        render: function() {
            return React.createElement(
                Navbar.Collapse,
                { style: style.root },
                React.createElement(
                    Nav,
                    { pullRight: true },
                    React.createElement(
                        NavItem,
                        { onClick: this.handleClickContact },
                        "Contact Me"
                    )
                )
            );
        }
    });
});