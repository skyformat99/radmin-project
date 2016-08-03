var React = require('react');

var Utils = require('radmin').Utils;

var RaSortable = require('radmin').Sortable;
var RaSortWithCrud = require('radmin').SortWithCrud;
var RaImageUpload = require('radmin').ImageUpload;

module.exports = React.createClass({
  mixins: [Utils.form],
  getInitialState: function() {
    return {
      //由于图片服务器返回格式的缘故，需使用两个变量保存状态，其中temp_url用于显示，url用于存储
      image: {
        url: null,
        temp_url: null
      }
    };
  },
  //图片上传
  _imageUploadComplete: function(url, tempUrl) {
    this.state.image.url = url;
    this.state.image.url_temp = tempUrl;
    this.forceUpdate();
  },
  _imageDelete: function() {
    this.state.image.url = null;
    this.state.image.url_temp = null;
    this.forceUpdate();
  },
  _onItemsChange: function(items) {
    console.info(items);
  },
  _deleteAlert: function(minCount) {
    Utils.alert('至少保留' + minCount + '项。');
  },
  _deleteConfirm: function(item, callback) {
    Utils.confirm({
      text: '确定删除' + item.name + '吗？',
      onConfirm: callback
    });
  },
  render: function() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return (
      <div className="stardard-page ui">
        <div className="line" style={{marginLeft: 42}}>
          图片上传：
          <RaImageUpload onComplete={this._imageUploadComplete} onDelete={this._imageDelete} onAlert={Utils.alert} src={this.state.image.url_temp ? this.state.image.url_temp : this.state.image.url}></RaImageUpload>
          <div className="form-description" style={{paddingLeft: 73}}>
            {'此功能需要后台支持'}
          </div>
        </div>
        <div className="line" style={{marginLeft: 0}}>
          增删改排序组件：
          <RaSortWithCrud createId={true} items={[{id: 1, name:'第一项'}, {id: 3, name: '第三项'}]} onItemsChange={this._onItemsChange} minCount={1} deleteAlert={this._deleteAlert} deleteConfirm={this._deleteConfirm} name="添加项" />
        </div>
      </div>
    );
  },
});
