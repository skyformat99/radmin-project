var React = require('react');

var RightPanelPage = React.createClass({
  render: function() {
    return (
      <div className="right-panel-page">
        {this.props.children}
      </div>
    );
  },
});

module.exports = RightPanelPage;
