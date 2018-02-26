define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {
            marginTop: '20px',
        }
    };
    // Component
    return Contact = createReactClass({
        displayName: 'MoreButton',
        render: function() {
            var _onClickMoreButton = this.props.onClickMoreButton;
            return React.createElement( 'button',
                {
                    className: 'btn btn-default btn-xs btn-block',
                    style: style.root,
                    onClick: function(){
                        _onClickMoreButton();
                    }
                },
                'more'
            );
        }
    });
});