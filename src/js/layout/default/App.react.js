var React = require('react');

var Utils = require('radmin').Utils;

var LeftPanel = require('./LeftPanel.react');
var RightPanel = require('./RightPanel.react');
var RightPanelHeader = require('./RightPanelHeader.react');
var RightPanelPage = require('./RightPanelPage.react');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <LeftPanel></LeftPanel>
        <RightPanel>
          <RightPanelHeader />
          <RightPanelPage>
            {this.props.children}
          </RightPanelPage>
        </RightPanel>
      </div>
    );
  }
});

module.exports = App;
