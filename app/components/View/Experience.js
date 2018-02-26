define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Axios = require('axios');
    var Company = require('./Company');
    var MoreButton = require('./MoreButton');
    // Component Style
    var style = {
        root: {
            width: '100%',
            height: 'auto',
            paddingBottom: '20px',
            borderBottom: '1px solid #eee'
        }
    };
    // Component
    return Experience = createReactClass({
        displayName: 'Experience',
        getInitialState: function() {
            return {
                description: 'project experience loading..',
                companies: [],
                isFold: true
            };
        },
        componentDidMount: function() {
            // console.log('[Component] Experience Mounted!!');
            // console.log(this.props);
            var _this = this;
            Axios.get('/data/experience.json')
            .then(function(response) {
                if(response.status === 200) {
                    var experience = response.data;
                    _this.setState({
                        description: experience.description,
                        companies: experience.companies
                    });
                }
            })
            .catch(function(err) {
                console.log(err);
            });
        },
        onClickMoreButton: function(){
            this.setState({
                description: this.state.description,
                companies: this.state.companies,
                isFold: false
            });
        },
        render: function() {
            return this.state.companies.length > 0
            ?
            React.createElement( 'div', { className: 'col-xs-12', style: style.root },
                React.createElement( 'h2', null, 'Experience' ),
                React.createElement( 'ul', null,
                    // first 
                    React.createElement( 'li', { key: 'company-0' },
                        React.createElement( Company, { company: this.state.companies[0] } )
                    ),
                    // remains
                    this.state.isFold === false
                    ?
                    this.state.companies.map(function(company, company_idx){
                        if(company_idx === 0)
                            return;
                        else 
                            return React.createElement( 'li', { key: 'company-'+ company_idx },
                                React.createElement( Company, { key: 'company-'+ company_idx, company: company } )
                            );
                    })
                    :
                    React.createElement( MoreButton, { onClickMoreButton: this.onClickMoreButton })
                )
            )
            :
            React.createElement( 'p', null, 'no-data' );
        }
    });
});