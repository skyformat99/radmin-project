var React = require('react');

var RaRadio = require('radmin').Radio;
var RaRadioGroup = require('radmin').RadioGroup;
var RaCheckBox = require('radmin').CheckBox;
var RaCheckBoxGroup = require('radmin').CheckBoxGroup;
var RaSwitch = require('radmin').Switch;
var RaSelect = require('radmin').Select;
var RaSlider = require('radmin').Slider;
var RaTooltip = require('radmin').ToolTip;
var RaTabs = require('radmin').Tabs;
var Utils = require('radmin').Utils;

module.exports = React.createClass({
  mixins: [Utils.formUtil],
  getInitialState: function() {
    return {
      radioCheck: 1,
      switchCheck: true,
      checkBoxCheck1: false,
      checkBoxCheck2: true,
      selectValue: 1,
      sliderValue: 4,
      tab: 0
    };
  },
  _buttonClick: function() {},
  _radioCheck: function(value) {
    this.setState({
      radioCheck: value
    });
  },
  _radioGroupCheck: function(data) {
    console.info(data);
  },
  _switchCheck: function(value, checked) {
    this.setState({
      switchCheck: checked
    });
  },
  _checkBoxCheck1: function(value, checked) {
    this.setState({
      checkBoxCheck1: checked
    });
  },
  _checkBoxCheck2: function(value, checked) {
    this.setState({
      checkBoxCheck2: checked
    });
  },
  _checkBoxGroupCheck: function(data) {
    console.info(data);
  },
  _selectChange: function(value) {
    this.setState({
      selectValue: value
    });
  },
  _sliderChange: function(value) {
    this.setState({
      sliderValue: value
    });
  },
  _tabChange: function(index) {
    alert(index)
  },
  render: function() {
    return (
      <div className="stardard-page">
        <div className="line" style={{marginLeft: 0}}>
          输入框：
          <input type="text" placeholder="请输入内容" style={{marginLeft: 5}}/>
          <input type="password" placeholder="请输入密码" style={{marginLeft: 5}}/>
          <input type="text" value="不可编辑" disabled={true} style={{marginLeft: 5}}/>
        </div>
        <div className="line" style={{marginLeft: 0}}>
          文本区：
          <textarea placeholder="请输入文本" style={{marginLeft: 5}}/>
        </div>
        <div className="line" style={{marginLeft: 14}}>
          开关：
          <RaSwitch checked={this.state.switchCheck} onCheck={this._switchCheck} style={{marginLeft: 5}}></RaSwitch>
        </div>
        <div className="line" style={{marginLeft: 0}}>
          单选框：
          <RaRadio name="radio-name" value={1} checked={this.state.radioCheck === 1} onCheck={this._radioCheck} style={{marginLeft: 5}}>单选一</RaRadio>
          <RaRadio name="radio-name" value={2} checked={this.state.radioCheck === 2} onCheck={this._radioCheck} style={{marginLeft: 5}}>单选二</RaRadio>
        </div>
        <div className="line" style={{marginLeft: 56}}>
          <RaRadioGroup data={[{name: '选项一', value: 'item1', checked: false}, {name: '选项二', value: 'item2', checked: true}, {name: '选项三', value: 'item3', checked: false}]} onCheck={this._radioGroupCheck} value={'item3'} name={'randomname434344'} margin={20} style={{marginLeft: 5}}></RaRadioGroup>
        </div>
        <div className="line" style={{marginLeft: 0}}>
          多选框：
          <RaCheckBox value={'多选框一'} checked={this.state.checkBoxCheck1} onCheck={this._checkBoxCheck1} style={{marginLeft: 5}}>多选一</RaCheckBox>
          <RaCheckBox checked={this.state.checkBoxCheck2} onCheck={this._checkBoxCheck2} style={{marginLeft: 5}}>多选二</RaCheckBox>
        </div>
        <div className="line" style={{marginLeft: 56}}>
          <RaCheckBoxGroup data={[{name: '选项一', value: 'item1', checked: false}, {name: '选项二', value: 'item2', checked: true}, {name: '选项三', value: 'item3', checked: false}]} onCheck={this._checkBoxGroupCheck} margin={20} style={{marginLeft: 5}}></RaCheckBoxGroup>
        </div>
        <div className="line" style={{marginLeft: 0}}>
          下拉框：
          <RaSelect name="请选择" options={[{name: '苹果', value: '0'}, {name: '梨子', value: '1'}, {name: '香蕉', value: '2'}]} defaultValue={this.state.selectValue} onSelected={this._selectChange} style={{marginLeft: 5, width: 180}}></RaSelect>
        </div>
        <div className="line" style={{marginLeft: 14}}>
          滑块：
          <RaSlider min={1} max={20} step={1} value={this.state.sliderValue} dragging={this._sliderChange} style={{marginLeft: 5}}></RaSlider>{this.state.sliderValue}
        </div>
        <div className="line" style={{marginLeft: 14}}>
          按钮：
          <button onClick={this._buttonClick} style={{marginLeft: 5}}>标准按钮</button>
          <button className="main" style={{marginLeft: 5}}>关键按钮</button>
          <button className="small" style={{marginLeft: 5}}>小按钮</button>
        </div>
        <div className="line" style={{marginLeft: 0}}>
          小提示：
          <i className="ra-icon-help" style={{marginLeft: 5}}><RaTooltip content={"这是小提示，啦啦啦啦啦"}></RaTooltip></i>
        </div>
        <div className="line" style={{marginLeft: 14}}>
          页签：
          <div style={{display: "inline-block", width: 400, marginLeft: 5}}>
            <RaTabs onSelected={this._tabChange}>
              <RaTabs.Tab name="页签一">
                内容一
              </RaTabs.Tab>
              <RaTabs.Tab name="页签二">
                内容二
              </RaTabs.Tab>
              <RaTabs.Tab name="页签三">
                内容三
              </RaTabs.Tab>
            </RaTabs>
          </div>
        </div>
      </div>
    );
  },
});