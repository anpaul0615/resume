define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {}
    };
    // Component
    return Logo = createReactClass({
        displayName: 'Logo',
        render: function() {
            return React.createElement(
                'div',
                { className: 'navbar-header' },
                // logo-text
                React.createElement(
                    'a',
                    { className: 'navbar-brand', href: '/' },
                    'anpaul0615.github.io'
                ),
                // toggle-button (by media-query)
                React.createElement(
                    'button',
                    { className: 'navbar-toggle collapsed' },
                    React.createElement( 'span', { className:'sr-only' }, 'Toggle navigation' ),
                    React.createElement( 'span', { className:'icon-bar' } ),
                    React.createElement( 'span', { className:'icon-bar' } ),
                    React.createElement( 'span', { className:'icon-bar' } )
                )
            );
        }
    });
});