define(function(require, exports, module) {
    // Import
    var React = require('react');
    var ReactBootstrap = require('react-bootstrap');
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
        componentDidMount: function() {
            // console.log('[Layout] Body Mounted!!');
            // console.log(this.props);
        },
        render: function() {
            return React.createElement(
                'div',
                { style: style.root, className: 'main' },
                React.createElement( Introduce, null ),
                React.createElement( Experience, null ),
                React.createElement( Community, null )
            );
        }
    });
});