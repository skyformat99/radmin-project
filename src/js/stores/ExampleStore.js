var Utils = require('radmin').Utils;
var StoreConfig = require('../config/StoreConfig');


//创建store
var ExampleStore = Utils.createStore();

//设置要存储的数据名称
ExampleStore.register(StoreConfig.STORE_EXAMPLE_FORM_DATA);
ExampleStore.register(StoreConfig.STORE_EXAMPLE_ITEM_LIST_DATA);

module.exports = ExampleStore;
