define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {}
    };
    // Component
    return Contact = createReactClass({
        displayName: 'Contact',
        handleClickContact: function() {
            alert('contact!!');
        },
        render: function() {
            return React.createElement(
                'div',
                { className: 'navbar-collapse collapse' },
                React.createElement(
                    'ul',
                    { className: 'nav navbar-nav pull-right' },
                    React.createElement(
                        'li',
                        { role: 'presentation' },
                        React.createElement(
                            'a',
                            {
                                href: '#',
                                onClick: this.handleClickContact
                            }, 
                            'Contact Me'
                        )
                    )
                )
            );
        }
    });
});