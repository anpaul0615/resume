define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    var Axios = require('axios');
    // Component Style
    var style = {
        root: {
            width: '100%',
            height: 'auto',
            paddingBottom: '20px',
            borderBottom: '1px solid #eee'
        },
    };
    // Component
    return Experience = createReactClass({
        displayName: 'Experience',
        getInitialState: function() {
            return {
                description: 'project experience loading..',
                companies: []
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
        render: function() {
            return this.state.companies.length > 0
            ?
            React.createElement( 'div', { className: 'col-xs-12', style: style.root },
                // companies 
                this.state.companies.map(function(company, company_idx){
                    return [
                        // company-info
                        React.createElement( 'h3', { key: 'company-'+ company_idx },
                            company.name,
                            React.createElement( 'br', null ),
                            React.createElement( 'small', null, company.job_title ),
                            React.createElement( 'small', null, ', ' ),
                            React.createElement( 'small', null, company.working_period )
                        ),
                        // projects
                        React.createElement( 'ul', { key: 'company-'+ company_idx +'-projects' },
                            company.projects.map(function(project, project_idx){
                                return React.createElement( 'li', { key: 'company-'+ company_idx +'-projects-'+ project_idx }, 
                                    React.createElement( 'a',
                                        {
                                            href: project.detail,
                                            target: "_blank"
                                        },
                                        project.title_en
                                    ),
                                    React.createElement( 'br', null ),
                                    React.createElement( 'small', null, project.description_en )
                                );
                            })
                        )
                    ];
                })
            )
            :
            React.createElement( 'p', null, 'no-data' );
        }
    });
});