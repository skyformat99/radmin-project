var React = require('react');

var LoginAction = require('../../actions/LoginAction');

var App = React.createClass({
  contextTypes: {
    location: React.PropTypes.object,
    params: React.PropTypes.object,
    query: React.PropTypes.object
  },
  componentDidMount: function() {
  },
  _login: function() {
    var url = this.context.query.url;
    if (url) {
      url = decodeURIComponent(url);
    }

    LoginAction.login(url);
  },
  render: function() {
    return (
      <div className="app" style={{textAlign: 'center', position: 'absolute', width: '100%', height: '100%'}}>
        <div style={{marginTop: 200}}>您还未登录</div>
        <button onClick={this._login}>登录</button>
      </div>
    );
  }
});

module.exports = App;
