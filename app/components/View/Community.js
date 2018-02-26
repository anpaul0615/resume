define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Axios = require('axios');
    var Activity = require('./Activity');
    // Component Style
    var style = {
        root: {
            width: '100%',
            height: 'auto',
            paddingBottom: '20px'
        }
    };
    // Component
    return Community = createReactClass({
        displayName: 'Community',
        getInitialState: function() {
            return {
                description: 'project experience loading..',
                activities: []
            };
        },
        componentDidMount: function() {
            // console.log('[Component] Community Mounted!!');
            // console.log(this.props);
            var _this = this;
            Axios.get('/data/community.json')
            .then(function(response) {
                if(response.status === 200) {
                    var community = response.data;
                    _this.setState({
                        description: community.description,
                        activities: community.activities
                    });
                }
            })
            .catch(function(err) {
                console.log(err);
            });

        },
        render: function() {
            return this.state.activities.length > 0
            ?
            React.createElement( 'div', { className: 'col-xs-12', style: style.root },
                React.createElement( 'h2', null, 'Community' ),
                React.createElement( 'ul', null,
                    this.state.activities.map(function(activity, activity_idx){
                        return React.createElement( 'li', { key: 'activity-'+ activity_idx },
                            React.createElement( 'h4',null,
                                activity.title,
                                React.createElement( 'br', null ),
                                React.createElement( 'small', null, activity.date ),
                                React.createElement( 'small', null, ', ' ),
                                React.createElement( 'small', null, activity.host )
                            )
                        );
                    })
                )
            )
            :
            React.createElement( 'p', null, 'no-data' );
        }
    });
});