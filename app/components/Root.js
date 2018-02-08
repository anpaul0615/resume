define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Header = require('components/Layout/Header');
    var Body = require('components/Layout/Body');
    var Footer = require('components/Layout/Footer');
    // Component
    return Root = createReactClass({
        displayName: 'Root',
        render: function() {
            return [
                React.createElement( Header, { key: 'header' } ),
                React.createElement( Body, { key: 'body' } ),
                React.createElement( Footer, { key: 'footer' } )
            ];
        }
    });
});