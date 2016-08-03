var React = require('react');
var RaSelect = require('radmin').Select;
var RaDatePicker = require('radmin').DatePicker;
var RaTreeSelect = require('radmin').TreeSelect;
var RaDateRangePicker = require('radmin').DateRangePicker;

var ExampleAction = require('../../actions/ExampleAction');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      optionsList: [],
      options: []
    };
  },
  componentDidMount: function() {
    //从接口拉数据
    var self = this;
    ExampleAction.getOption(function (data) {
      var options = [];
      if (data.length) {
        for (var i = 0; i < data.length; i++) {
          options.push({name: data[i].name, value: data[i].act_id});
        }
      }

      self.setState({
        optionsList: options
      })
    });
  },
  _update: function (name) {
    var opt = [];
    this.state.optionsList.map(function(item) {
      if (item.name.toLowerCase().indexOf(name.toLowerCase()) != -1) {
        opt.push(item);
      }
    });

    this.setState({
      options: opt
    });
  },
  _select: function (value) {
    console.log(value);
  },
  _onDateChange1: function(value, date) {
    console.info(value);
    console.info(date); //JS Date对象
  },
  _onDateChange2: function(value) {
    console.info(value);
  },
  _onTreeChecked: function(value) {
    console.info(value);
  },
  render: function() {
    var _data = [{
        name: '全部',
        value: '1',
        checked: false,
        expand: true,
        children: [{
          name: '第一级元素1',
          value: 'i-1',
          checked: false,
          children: [{
            name: '第二级元素1-1',
            value: 'i-1-1'
          }, {
            name: '第二级元素1-2',
            value: 'i-1-2',
          }, {
            name: '第二级元素1-3',
            value: 'i-1-3',
          }]
        }, {
          name: '第一级元素2',
          value: 'i-2',
          checked: false,
          children: [{
            name: '第二级元素2-1',
            value: 'i-2-1',
          }, {
            name: '第二级元素2-2',
            value: 'i-2-2',
            expand: true,
            children: [{
              name: '第二级元素2-2-1',
              value: 'i-2-2-1',
            }, {
              name: '第二级元素2-2-2',
              value: 'i-2-2-2',
            }, {
              name: '第二级元素2-2-3',
              value: 'i-2-2-3',
              checked: true        
            }]
          }]
        }, {
          name: '第一级元素3',
          value: 'i-3',
          checked: false        
        }, {
          name: '第一级元素4',
          value: 'i-4',
          checked: false,
          children: [{
            name: '第二级元素4-1',
            value: 'i-4-1',
            checked: false
          }, {
            name: '第二级元素4-2',
            value: 'i-4-2',
            checked: false        
          }, {
            name: '第二级元素4-3',
            value: 'i-4-3',
            checked: false        
          }]
        }]
      }];

    return (
      <div className="stardard-page">
        <div className="line" style={{marginLeft: 28}}>
          自动完成框：
          <RaSelect placeholder="请输入" options={this.state.options}  onSelected={this._select} onUpdate={this._update} style={{marginLeft: 5, width: 180}} searchable hideIcon={true}></RaSelect>
        </div>
        <div className="line" style={{marginLeft: 28}}>
          日期选择器：
          <RaDatePicker minDate="2015-10-10" maxDate={new Date()} onDateChange={this._onDateChange1} style={{marginLeft: 5}}/>
        </div>
        <div className="line">
          日期范围选择器：
          <RaDateRangePicker maxDate={new Date()} onDateChange={this._onDateChange2} style={{marginLeft: 5}}/>
        </div>
        <div className="line" style={{marginLeft: 28}}>
          树形选择框：
          <RaTreeSelect data={_data} onItemSelected={this._onTreeChecked} style={{marginLeft: 5}}/>
        </div>
      </div>
    );
  },
});
