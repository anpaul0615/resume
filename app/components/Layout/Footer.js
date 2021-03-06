define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {
            textAlign: 'center',
            borderTop: '1px solid #eee',
            padding: '2em 0'
        }
    };
    // Component
    return Footer = createReactClass({
        displayName: 'Footer',
        render: function() {
            return React.createElement(
                "footer",
                { style: style.root },
                "\xA9 2019 copyright Paul An"
            );
        }
    });
});