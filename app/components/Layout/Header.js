define(function(require, exports, module) {
    // Import
    var React = require('react');
    var ReactBootstrap = require('react-bootstrap');
    var createReactClass = require('create-react-class');
    var Logo = require('components/View/Logo');
    var Contact = require('components/View/Contact');
    // Bootstrap Component
    var Navbar = ReactBootstrap.Navbar;
    // Component Style
    var style = {
        root: {
            color: 'red'
        }
    };
    // Component
    return Header = createReactClass({
        displayName: 'Header',
        componentDidMount: function() {
            // console.log('[Layout] Header Mounted!!');
            // console.log(this.props);
        },
        render: function() {
            return React.createElement(
                Navbar,
                { style: style.root, fixedTop: true},
                React.createElement( Logo, null ),
                React.createElement( Contact, null )
              );
        }
    });
});