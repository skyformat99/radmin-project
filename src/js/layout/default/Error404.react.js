var React = require('react');

var Error404 = React.createClass({
  contextTypes: {
    location: React.PropTypes.any
  },
  render: function() {
    return (
      <div className="app">
        页面未找到：{this.context.location.pathname}
      </div>
    );
  }
});

module.exports = Error404;
