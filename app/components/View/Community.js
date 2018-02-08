define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Axios = require('axios');
    // Component Style
    var style = {
        root: {}
    };
    // Component
    return Community = createReactClass({
        displayName: 'Community',
        getInitialState: function() {
            return {
                data: null
            };
        },
        componentDidMount: function() {
            // console.log('[Component] Community Mounted!!');
            // console.log(this.props);
            var _this = this;
            Axios.get('/data/community.json')
            .then(function(response) {
                if(response.status === 200) {
                    _this.setState({
                        data: JSON.stringify(response.data)
                    });
                }
            })
            .catch(function(err) {
                console.log(err);
            });

        },
        render: function() {
            return this.state.data
            ? React.createElement(
                'p', null, JSON.stringify(this.state.data)
            )
            : React.createElement(
                'p', null, 'no-data'
            );
        }
    });
});