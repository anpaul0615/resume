define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Axios = require('axios');
    // Component Style
    var style = {
        root: {
            display: 'flex',
            width: '100%',
            height: 'auto',
            paddingBottom: '20px',
            borderBottom: '1px solid #eee'
        },
        avatar: {
            height: '100%',
            position: 'absolute'
        }
    };
    // Component
    return Introduce = createReactClass({
        displayName: 'Introduce',
        getInitialState: function() {
            return {
                avatar: 'https://avatars0.githubusercontent.com/u/8488507?s=460&v=4',
                name: 'Paul An',
                whoami: 'An ordinary developer.',
                links: []
            };
        },
        componentDidMount: function() {
            var _this = this;
            Axios.get('/data/introduce.json')
            .then(function(response) {
                if(response.status === 200) {
                    var introduce = response.data;
                    _this.setState({
                        avatar: introduce.avatar,
                        name: introduce.name,
                        whoami: introduce.whoami,
                        links: introduce.links
                    });
                }
            })
            .catch(function(err) {
                console.log(err);
            });
        },
        render: function() {
            return this.state.avatar
            ?
            React.createElement( 'div', { className: 'col-xs-12', style: style.root },
                // introduce
                React.createElement( 'div', { className: 'col-xs-12 col-sm-8 col-md-9' },
                    // name
                    React.createElement( 'h1', null, this.state.name ),
                    React.createElement( 'blockquote', null, this.state.whoami ),
                    // links
                    React.createElement( 'ul', null, 
                        this.state.links.map(function(link,idx){
                            return React.createElement( 'li', { key: idx }, 
                                React.createElement( 'a',
                                    { 
                                        href: link.url,
                                        target: "_blank"
                                    }, 
                                    link.name
                                )
                            );
                        })
                    )
                ),
                // avatar
                React.createElement( 'div', { className: 'col-xs-12 col-sm-4 col-md-3 hidden-xs' }, 
                    React.createElement( 'img', { className: 'img-thumbnail', style: style.avatar, src: this.state.avatar } )
                )
            )
            :
            React.createElement( 'p', null, 'no-data' );
        }
    });
});