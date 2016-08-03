var React = require('react');
var clone = require('clone');

var Utils = require('radmin').Utils;
var RaTable = require('radmin').Table;

var UiConfig = require('../../config/UiConfig');
var StoreConfig = require('../../config/StoreConfig');

var ExampleAction = require('../../actions/ExampleAction');
var ExampleStore = require('../../stores/ExampleStore');



var EditItem = require('./EditItem.react');

module.exports = React.createClass({
    getInitialState: function() {
    return {
      limit: UiConfig.pageLimit,
      itemListData: null,
      editItem: false,
      pageIndex: 0,
      item_id: null
    };
  },
  componentDidMount: function() {
    ExampleStore.addChangeListener(this._update);

    this._getItemList();
  },
  componentWillUnmount: function() {
    ExampleStore.removeChangeListener(this._update);
  },
  _update: function() {
    var data = ExampleStore.getData(StoreConfig.STORE_EXAMPLE_ITEM_LIST_DATA);
    this.setState({itemListData: data.list});
  },
  _showEditItemPopup: function() {
    this.setState({editItem: true, item_id: null});
  },
  _onEditItemCancel: function() {
    this.setState({editItem: false, item_id: null});
  },
  _onEditItemConfirm: function() {
    this.setState({editItem: false, item_id: null});

    this._getItemList();
  },
  _getItemList: function() {
    ExampleAction.getItemList(this.state.limit, this.state.limit * this.state.pageIndex);
  },
  _edit: function(item_id) {
    Utils.prompt({
      text: '编辑'
    });
  },
  _delete: function(item_id) {
    Utils.confirm({
      text: '是否删除？',
      onConfirm: function() {

      }
    });
  },
  
  _onPageChange: function(index) {
    this.setState({pageIndex: index}, function() {
      this._getItemList();
    });
  },
  _onPageLimitChange: function(limit) {
    UiConfig.pageLimit = limit;
    this.state.limit = limit;
    this.state.pageIndex = 0;
    this._getItemList();
  },
  _format: function() {
    var data = clone(this.state.itemListData);
    if (data instanceof Array) {
      data = data.map(function(obj) {
		//自定义表格内容可按如下方式处理
        //obj.zzjgdmz = (<img src={obj.zzjgdmz}></img>);
        return obj;
      });
    }
    return data;
  },
  render: function() {
    return (
      <div className="stardard-page">
        <div className="line edit-line" style={{top: -15}}>
          <div>
            <button className="main edit" onClick={this._showEditItemPopup}>新建</button>
          </div>
        </div>
        <div className="line">
          <RaTable data={this._format()}
            pagination={true}
            selectRow={{enable:true}}
            addRow={false}
            deleteRow={false}
            action={[
              {content:(<i className="icon tb-icon" title="修改"></i>), action:this._edit},
              {content:"删除", action:this._delete}
            ]}>
            <RaTable.Column dataField="item_id" isKey={true} align="right" display={false} sort={true}>名称</RaTable.Column>
            <RaTable.Column dataField="name" sort={true}>名称</RaTable.Column>
            <RaTable.Column dataField="description">描述</RaTable.Column>
            <RaTable.Column dataField="time" align="center">创建日期</RaTable.Column>
          </RaTable>
        </div>
        
        {this.state.editItem ? 
            <EditItem ref="itra-edit" onConfirm={this._onEditItemConfirm} onCancel={this._onEditItemCancel} item_id={this.state.item_id}></EditItem>
        : null}
      </div>
    );
  },
});
