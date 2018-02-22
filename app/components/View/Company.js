define(function(require, exports, module) {
    // Import
    var React = require('react');
    var createReactClass = require('create-react-class');
    // Component Style
    var style = {
        root: {},
        project_title: {
            fontWeight: 'bold'
        },
        tech_stacks: {
            margin: '0 1px'
        }
    };
    // Component
    return Contact = createReactClass({
        displayName: 'Company',
        render: function() {
            var company = this.props.company;
            var company_idx = this.props.company_idx;
            return [
                // company-info
                React.createElement( 'h3', { key: 'company-'+ company_idx +'-info' },
                    company.name,
                    React.createElement( 'br', null ),
                    React.createElement( 'small', null, company.job_title ),
                    React.createElement( 'small', null, ', ' ),
                    React.createElement( 'small', null, company.working_period )
                ),
                // projects
                React.createElement( 'ul', { key: 'company-'+ company_idx +'-projects' },
                    company.projects.map(function(project, project_idx){
                        return React.createElement( 'li', 
                            {
                                key: 'company-'+ company_idx +'-project-'+ project_idx
                            }, 
                            React.createElement( 'a',
                                {
                                    style: style.project_title,
                                    href: project.detail,
                                    target: "_blank"
                                },
                                project.title_en
                            ),
                            React.createElement( 'br', null ),
                            React.createElement( 'small', null, project.description_en ),
                            React.createElement( 'br', null ),
                            // tech-stacks
                            project.tech_stacks.map(function(stack, stack_idx){
                                return React.createElement( 'span',
                                    {
                                        className: 'label label-default',
                                        style: style.tech_stacks,
                                        key: 'company-'+ company_idx +'-project-'+ project_idx +'-stack-'+ stack_idx
                                    },
                                    stack
                                );
                            })
                        );
                    })
                )
            ];
        }
    });
});