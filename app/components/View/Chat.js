define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {
            width: '320px',
            height: '80%',
            minHeight: '480px',
            maxHeight: '720px',
            overflow: 'hidden',
            position: 'fixed',
            top: '60px',
            right: '30px',
            borderRadius: '16px',
            backgroundColor: 'transparent',
            boxShadow: '0 6px 60px 0 rgba(81,99,120,0.3)',
            zIndex: '1000000000'
        },
        iframe: {
            width: '100%',
            height: '100%',
            position: 'relative',
            border: 'none',
        }
    };
    // Component
    return Chat = createReactClass({
        displayName: 'Chat',
        render: function() {
            return React.createElement(
                'div',
                { style: style.root },
                React.createElement(
                    'iframe',
                    { style: style.iframe, src: 'https://profile-chat.anpaul0615.com' }
                )
            );
        }
    });
});