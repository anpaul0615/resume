define(function(require, exports, module) {
    // Import
    var React = require('react');
    var ReactBootstrap = require('react-bootstrap');
    var createReactClass = require('create-react-class');
    // Bootstrap Component
    var Navbar = ReactBootstrap.Navbar;
    // Component Style
    var style = {
        root: {},
    };
    // Component
    return Logo = createReactClass({
        displayName: 'Logo',
        componentDidMount: function() {
            // console.log('[Component] Logo Mounted!!');
            // console.log(this.props);
        },
        render: function() {
            return React.createElement(
                Navbar.Header,
                { style: style.root },
                React.createElement(
                    Navbar.Brand,
                    null,
                    React.createElement(
                        "a",
                        { href: "/" },
                        "anpaul0615.github.io"
                    )
                ),
                React.createElement(Navbar.Toggle, null)
            );
        }
    });
});