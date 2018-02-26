define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {
            color: '#333',
            marginTop: '20px'
        }
    };
    // Component
    return Contact = createReactClass({
        displayName: 'MoreButton',
        render: function() {
            var _onClickMoreButton = this.props.onClickMoreButton;
            return React.createElement( 'button',
                {
                    className: 'btn btn-link btn-xs btn-block',
                    style: style.root,
                    onClick: function(){
                        _onClickMoreButton();
                    }
                },
                // 'more'
                // glyphicon glyphicon-chevron-down
                // glyphicon glyphicon-menu-down
                // glyphicon glyphicon-option-horizontal
                React.createElement( 'span',
                    {
                        className:'glyphicon glyphicon-menu-down',
                        'aria-hidden': 'true'
                    }
                )
            );
        }
    });
});