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
        displayName: 'Activity',
        render: function() {
            var activity = this.props.activity;
            return React.createElement( 'h4',null,
                activity.title,
                React.createElement( 'br', null ),
                React.createElement( 'small', null, activity.date ),
                React.createElement( 'small', null, ', ' ),
                React.createElement( 'small', null, activity.host )
            );
        }
    });
});