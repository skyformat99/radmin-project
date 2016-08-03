var React = require('react');

var Utils = require('radmin').Utils;
var RaPagination = require('radmin').Pagination;

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
    this.setState({itemListData: ExampleStore.getData(StoreConfig.STORE_EXAMPLE_ITEM_LIST_DATA)});
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
  _createTable: function() {
    if (typeof this.state.itemListData === 'undefined' || this.state.itemListData == null) {
      return null;
    }
    if (!(this.state.itemListData.list instanceof Array)) {
      return;
    }

    var that = this;
    var tableTrEle = null;
    if (this.state.itemListData.list.length > 0) {
      tableTrEle = this.state.itemListData.list.map(function(obj, i) {
        var _edit = function() {
          that._edit(obj.id);
        };
        var _delete = function() {
          that._delete(obj.id);
        };

        return (
          <tr key={i}>
            <td>{obj.name}</td>
            <td>{obj.description}</td>
            <td>{obj.time}</td>
            <td>
              <div className="text-button" onClick={_edit}>编辑</div>
              <div className="text-button" onClick={_delete}>删除</div>
            </td>
          </tr>
        );
      });
    } else {
      tableTrEle = (
        <tr><td colSpan={7}>暂无数据</td></tr>
      );
    }
    
    return (
      <div>
        <div className="line">
          <table className="itra-table">
            <thead>
              <tr>
                <th>名称</th>
                <th>描述</th>
                <th>创建日期</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {tableTrEle}
            </tbody>
          </table>
        </div>
      </div>
    );
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
  render: function() {
    return (
      <div className="stardard-page">
        <div className="line edit-line" style={{top: 0, marginBottom: 10}}>
          <div>
            <button className="main edit" onClick={this._showEditItemPopup}>新建</button>
          </div>
        </div>
        <div className="line">
          {this._createTable()}
        </div>
        <div className="line">
          {this.state.itemListData && this.state.itemListData.count > 0 ? 
            <div className="line page" style={{textAlign: "center"}}>
              <RaPagination total={Math.ceil(this.state.itemListData.count / this.state.limit)} current={this.state.pageIndex} onPageChange={this._onPageChange} onPageLimitChange={this._onPageLimitChange} limit={this.state.limit} count={this.state.itemListData.count} jumpText={'跳转'}></RaPagination>
            </div>
          : null}
        </div>
        {this.state.editItem ? 
          <EditItem ref="itra-edit" onConfirm={this._onEditItemConfirm} onCancel={this._onEditItemCancel} item_id={this.state.item_id}></EditItem>
        : null}
      </div>
    );
  },
});
