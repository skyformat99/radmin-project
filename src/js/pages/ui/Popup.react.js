var React = require('react');

var Utils = require('radmin').Utils;

module.exports = React.createClass({
  mixins: [Utils.FormUtil],
  getInitialState: function() {
    return {
    };
  },
  _prompt: function() {
    Utils.prompt("我是悬浮提示");
  },
  _alert: function() {
    Utils.alert("我是提示框");
  },
  _confirm: function() {
    Utils.confirm({
      text: "我是确认框",
      onConfirm: function() {
      },
      onCancel: function() {
      }
    });
  },
  _qrcode: function() {
    Utils.qrcode({
      value: 'http://www.qq.com',
      onConfirm: function() {
      }
    });
  },
  _image: function() {
    Utils.image({
      src: "img/image.jpg",
      onClose: function() {}
    });
  },
  render: function() {
    return (
      <div className="stardard-page">
        <div className="line">
          <button onClick={this._prompt}>悬浮提示</button>
          <button onClick={this._alert} style={{marginLeft: 20}}>提示框</button>
        </div>
        <div className="line">
          <button onClick={this._confirm}>确认框</button>
          <button onClick={this._qrcode} style={{marginLeft: 20}}>二维码</button>
        </div>
        <div className="line">
          <button onClick={this._image}>图片</button>
        </div>
      </div>
    );
  },
});
