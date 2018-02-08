define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Introduce = require('components/View/Introduce');
    var Experience = require('components/View/Experience');
    var Community = require('components/View/Community');
    // Component Style
    var style = {
        root: {
            marginTop: '5em'
        }
    };
    // Component
    return Body = createReactClass({
        displayName: 'Body',
        render: function() {
            return React.createElement(
                'div',
                { style: style.root, className: 'container' },
                React.createElement( Introduce, null ),
                React.createElement( Experience, null ),
                React.createElement( Community, null )
            );
        }
    });
});