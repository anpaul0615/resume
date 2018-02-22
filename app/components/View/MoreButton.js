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
        displayName: 'MoreButton',
        render: function() {
            var _onClickMoreButton = this.props.onClickMoreButton;
            return React.createElement( 'button',
                {
                    className: 'btn btn-default btn-xs btn-block',
                    onClick: function(){
                        _onClickMoreButton();
                    }
                },
                'more'
            );
        }
    });
});