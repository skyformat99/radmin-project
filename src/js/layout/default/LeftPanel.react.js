var React = require('react');
var clone = require('clone');
var ClassNames = require('classnames');

var Utils = require('radmin').Utils;
var RaNavigation = require('radmin').Navigation;

var StoreConfig = require('../../config/StoreConfig');
var MenuAction = require('../../actions/MenuAction');
var MenuStore = require('../../stores/MenuStore');
var Login = require('./Login.react');


var LeftPanel = React.createClass({
  getInitialState: function() {
    return {
      menuData: {},
    };
  },
  componentDidMount: function() {
    MenuStore.addChangeListener(this._update);

    var that = this;

    if (typeof MenuStore.getData(StoreConfig.STORE_MENU_DATA) !== 'undefined' && MenuStore.getData(StoreConfig.STORE_MENU_DATA) != null) {
      this._update();
    } else {
      MenuAction.getMenu(function() {
        that._update();
      });
    }
  },
  componentWillUnmount: function() {
    MenuStore.removeChangeListener(this._update);
  },
  _update: function() {
    this.setState({menuData: MenuStore.getData(StoreConfig.STORE_MENU_DATA)});
  },
  _afterHashChange: function() {
  },
  _jumpTo: function(url) {
    Utils.jump('#' + url);
  },
  render: function() {
    var classes = ClassNames({
      'left-panel': true,
      'show-scroll': true
    });

    return (
      <div className={classes}>
        <Login />
        <RaNavigation data={this.state.menuData} afterHashChange={this._afterHashChange} jumpTo={this._jumpTo} onlyOneUrl={true}></RaNavigation>
      </div>
    );
  },
});

module.exports = LeftPanel;
