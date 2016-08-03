var React = require('react');

var Utils = require('radmin').Utils;
var RaPopup = require('radmin').Popup;
var RaValidation = require('radmin').Validation;

var StoreConfig = require('../../config/StoreConfig');
var ExampleAction = require('../../actions/ExampleAction');
var ExampleStore = require('../../stores/ExampleStore');


var EditItem = React.createClass({
  mixins: [Utils.FormUtil],
  propTypes: {
    onConfirm: React.PropTypes.func,
    onCancel: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      item_id: null
    };
  },
  getInitialState: function() {
    return {
      itemData: {
        name: '',
        description: ''
      },
      validate: false,  //是否开始表单验证
      itemDataCheck: {  //表单中每个字段是否验证通过，默认false
        name: false,
        description: false
      }
    };
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  componentWillMount: function() {
    if (this.props.item_id == null) {
    } else {
      var itemListData = ExampleStore.getData(StoreConfig.STORE_EXAMPLE_ITEM_LIST_DATA);
      for (var key in itemListData.list) {
        var obj = itemListData.list[key];
        if (obj.id === this.props.item_id) {
          this.passValue(obj, this.state.itemData);
        }
      }
    }
  },
  _saveItem: function(callback) {
    var that = this;

    var info = this.valueTransform(this.state.itemData, 'name');

    //此时激活验证控件，开始验证
    this.setState({validate: true}, function() {
      //字段都验证成功则向接口保存数据
      if (this.state.itemData.name && this.state.itemData.description) {
        //相当于复制一个info
        var info = this.valueTransform(this.state.itemData, 'name');

        //向接口保存数据
        ExampleAction.saveItem(that.props.item_id, info.name, info.description, callback);
      }
    });
  },
  _onConfirm: function() {
    var that = this;
    this._saveItem(function() {
      if (typeof that.props.onConfirm === 'function') {
        that.props.onConfirm();
      }
    });
  },
  _onCancel: function() {
    var that = this;
    if (typeof that.props.onCancel === 'function') {
      that.props.onCancel();
    }
  },
  _onValidate: function(name, success) {
    //记录下字段是否验证成功
    this.state.itemDataCheck[name] = success;
  },
  render: function() {
    return (
      <RaPopup onConfirm={this._onConfirm} onCancel={this._onCancel} name={this.props.item_id != null ? "编辑" : "新建"} topRatio={0.5}>
        <div className="line">
          <div className="icon-star">
            名称：
            <input type="text" placeholder="" value={this.state.itemData.name} onChange={this.createInputHandler(this.state.itemData, 'name')} style={{width: 350}} />
            <RaValidation name='name' value={this.state.itemData.name} validate={this.state.validate} rules={[{type: 'required', message: '名称不能为空。'}]} onValidate={this._onValidate} style={{marginLeft: 60}}/>
          </div>
        </div>
        <div className="line">
          <div className="icon-star">
            描述：
            <input type="text" placeholder="" value={this.state.itemData.description} onChange={this.createInputHandler(this.state.itemData, 'description')} style={{width: 350}} />
            <RaValidation name='description' value={this.state.itemData.description} validate={this.state.validate} rules={[{type: 'required', message: '描述不能为空。'}]} onValidate={this._onValidate} style={{marginLeft: 60}}/>
          </div>
        </div>
      </RaPopup>
    );
  }
});

module.exports = EditItem;
