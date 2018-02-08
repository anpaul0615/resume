define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Logo = require('components/View/Logo');
    var Contact = require('components/View/Contact');
    // Component Style
    var style = {
        root: {}
    };
    // Component
    return Header = createReactClass({
        displayName: 'Header',
        render: function() {
            return React.createElement(
                'div',
                { className: 'navbar navbar-default navbar-fixed-top' },
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement( Logo, null ),
                    React.createElement( Contact, null )
                )
            );
        }
    });
});