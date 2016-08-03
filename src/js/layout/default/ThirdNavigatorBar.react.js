var React = require('react');
var clone = require('clone');

var Utils = require('radmin').Utils;
var RaThirdNavigation = require('radmin').ThirdNavigation;

var StoreConfig = require('../../config/StoreConfig');
var MenuStore = require('../../stores/MenuStore');

var ThirdNavigatorBar = React.createClass({
  getInitialState: function() {
    return {
      menuData: null
    };
  },
  componentDidMount: function() {
    MenuStore.addChangeListener(this._updateData);

    window.addEventListener('hashchange', this._handleHashChange);

    this._updateData();
  },
  componentWillUnmount: function () {
    MenuStore.removeChangeListener(this._updateData);

    window.removeEventListener('hashchange', this._handleHashChange);
  },
  _handleHashChange: function() {
    this._update();
  },
  _updateData: function() {
    this.setState({menuData: MenuStore.getData(StoreConfig.STORE_MENU_DATA)});
  },
  _update: function() {
    this.setState({menuData: this.state.menuData});
  },
  _jumpTo: function(url) {
    Utils.jump('#' + url);
  },
  render: function() {
    return (
      <div className="navigator-bar">
        {this.state.menuData ? 
          <RaThirdNavigation data={this.state.menuData} jumpTo={this._jumpTo}></RaThirdNavigation>
        : null}
      </div>
    );
  },
});

module.exports = ThirdNavigatorBar;
