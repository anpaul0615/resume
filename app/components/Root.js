define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Header = require('components/Layout/Header');
    var Body = require('components/Layout/Body');
    var Footer = require('components/Layout/Footer');
    var Chat = require('components/View/Chat');
    // Component
    return Root = createReactClass({
        displayName: 'Root',
        getInitialState: function() {
            return {
                isChatActive: false
            };
        },
        handleContactButtonClick: function(){
            this.setState({ isChatActive: true });
        },
        componentDidMount: function() {
            console.log('Root.componentDidMount : ok');
            var _this = this;
            window.addEventListener('message', function(event){
                if (event.data === 'chat-off') {
                    _this.setState({ isChatActive: false });
                }
            });
        },
        render: function() {
            return [
                this.state.isChatActive 
                ? React.createElement( Chat, { key: 'chat' } ) 
                : null,
                React.createElement( Header, { key: 'header', 
                    handleContactButtonClick: this.handleContactButtonClick } ),
                React.createElement( Body, { key: 'body' } ),
                React.createElement( Footer, { key: 'footer' } )
            ];
        }
    });
});