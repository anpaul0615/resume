/*
 * component
 */
var CardHeader = React.createClass({
  propTypes: {
    'url': React.PropTypes.string.isRequired,
    'title': React.PropTypes.string.isRequired,
    'date': React.PropTypes.string.isRequired,
  },
  render: function(){
    return React.DOM.h4(
      null,
      React.DOM.a({'href': this.props.url}, this.props.title),
      React.DOM.br(null,null),
      React.DOM.small(
        {'className':'text-muted'},
        React.DOM.i({'className':'glyphicon glyphicon-time'}, null),
        ' ',
        this.props.date
      )
    );
  }
});
var CardBody = React.createClass({
  propTypes: {
    'content': React.PropTypes.string,
  },
  render: function(){
    return React.DOM.p(null, this.props.content);
  }
});
var Card = React.createClass({
  propTypes: {
    'post': React.PropTypes.object.isRequired,
  },
  render: function(){
    return React.DOM.div(
      {'className':'card'},
      React.createElement(CardHeader, {
        'url': this.props.post.url,
        'title': this.props.post.title,
        'date': this.props.post.date,
      }),
      React.createElement(CardBody, {
        'content': this.props.post.content,
      })
    );
  }
});

/*
 * container
 */
var CardContainer = React.createClass({
  propTypes: {
    'posts': React.PropTypes.array.isRequired,
  },
  render: function(){
    return React.DOM.div(
      null,
      this.props.posts.map(function(post){
        return React.createElement(Card, {
          'post': post,
        });
      })
    );
  }
});
