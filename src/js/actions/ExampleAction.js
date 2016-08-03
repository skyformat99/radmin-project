var Utils = require('radmin').Utils;
var UrlConfig = require('../config/UrlConfig');
var StoreConfig = require('../config/StoreConfig');


module.exports = {
  getForm: function() {
    Utils.ajax({
      url: UrlConfig.getForm,
      data: {},
      success: function(msg) {
        //将数据存入Store
        Utils.saveToStore({
          type: StoreConfig.STORE_EXAMPLE_FORM_DATA,
          data: msg.data
        });
      },
      error: function(msg) {
      }
    });
  },
  saveForm: function(info, callback) {
    //存入后台接口，在存储完成后执行回调函数
    Utils.ajax({
      url: UrlConfig.saveForm,
      data: info,
      success: function(msg) {
        callback();
      },
      error: function(msg) {
      }
    });
  },
  getItemList: function(limit, index) {
    Utils.ajax({
      url: UrlConfig.getItemList,
      data: {limit: limit, index: index},
      success: function(msg) {
        //一般情况下使用后端分页比较方便，这里为了便于展示，使用了前端分页
        var data = msg.data;
        var list = [];
        for (var i = index; i < Math.min(index + limit, data.length); i++) {
          list.push(data[i]);
        }
        //将数据存入Store
        Utils.saveToStore({
          type: StoreConfig.STORE_EXAMPLE_ITEM_LIST_DATA,
          data: {
            count: data.length,
            list: list
          }
        });
      },
      error: function(msg) {
      }
    });
  },
  saveItem: function(item_id, name, description, callback) {
    Utils.ajax({
      url: UrlConfig.saveItem,
      data: {item_id: item_id, name: name, description: description},
      success: function(msg) {
        callback();
      },
      error: function(msg) {
      }
    });
  },
  getOption: function(callback) {
    Utils.ajax({
      url: UrlConfig.getOption,
      data: {},
      success: function(msg) {
        //没有存入store，因为是测试数据
        callback(msg.data);
      },
      error: function(msg) {
      }
    });
  },
};
