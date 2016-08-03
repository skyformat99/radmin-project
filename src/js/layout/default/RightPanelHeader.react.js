var React = require('react');

var ThirdNavigatorBar = require('./ThirdNavigatorBar.react');

var UiConfig = require('../../config/UiConfig');

var RightPanelHeader = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="right-panel-header">
        <div className="app-name">{UiConfig.appName}</div>
        <ThirdNavigatorBar />
      </div>
    );
  },
});

module.exports = RightPanelHeader;
