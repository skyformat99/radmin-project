var React = require('react');

var RightPanel = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  updateDimensions: function() {
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
      <div className="right-panel">
        {this.props.children}
      </div>
    );
  },
});

module.exports = RightPanel;
