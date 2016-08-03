var React = require('react');

module.exports = React.createClass({
  contextTypes: {
    location: React.PropTypes.object,
    params: React.PropTypes.object,
    query: React.PropTypes.object
  },
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div>
        <div>location对象内容：{JSON.stringify(this.context.location)}</div>
        <div>params对象内容：{JSON.stringify(this.context.params)}</div>
        <div>query对象内容：{JSON.stringify(this.context.query)}</div>
        <a href={'#/example/param/' + parseInt(Math.random() * 10000) + '/' + parseInt(Math.random() * 10000)}>跳转链接带参数</a>
      </div>
    );
  }
});
