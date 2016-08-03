var React = require('react');
var clone = require('clone');

var RaBreadcrumb = require('radmin').Breadcrumb;
var Utils = require('radmin').Utils;

var NavigatorConfig = require('../../config/NavigatorConfig');
var CurrentAction = require('../../actions/CurrentAction');

var BreadcrumbBar = React.createClass({
  getInitialState: function() {
    return {
      menuData: {}
    };
  },
  componentDidMount: function() {
    var that = this;

    this.setState({menuData: clone(NavigatorConfig)});
  },
  _onTitleChange: function(title, alias) {
    CurrentAction.changeCurrentData({title, alias});
  },
  _jumpTo: function(url) {
    Utils.jump('#' + url);
  },
  render: function() {
    return (
      <div className="navigator-bar">
        <RaBreadcrumb data={this.state.menuData} defaultItem={{text: 'ReactAdmin', url: ''}} onTitleChange={this._onTitleChange} jumpTo={this._jumpTo}></RaBreadcrumb>
      </div>
    );
  },
});

module.exports = BreadcrumbBar;
