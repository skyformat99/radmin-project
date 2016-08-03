var React = require('react');

var Utils = require('radmin').Utils;
var RaForm = require('radmin').Form;
var RaFormField = require('radmin').Form.Field;
var RaFormUtil = require('radmin').Form.Util;
var RaFormValidation = require('radmin').Form.Validation;
var RaCheckBox = require('radmin').CheckBox;

var UiConfig = require('../../config/UiConfig');
var StoreConfig = require('../../config/StoreConfig');
var ExampleAction = require('../../actions/ExampleAction');
var ExampleStore = require('../../stores/ExampleStore');

/**
 * 在表单示例中主要展示了四部分功能的开发方式
 * 1、表单数据和相对应控件的数据绑定
 * 2、保存表单数据的状态变化，以便感知数据被更改，激活保存按钮
 * 3、表单验证
 * 4、表单数据通过Action中的方法提交
 */
module.exports = React.createClass({
  mixins: [RaFormUtil],
  getInitialState: function() {
    return {
      info: {           //要验证的表单数据
        name: '',
        staffs: '',
        visitor: false
      }
    };
  },
  componentDidMount: function() {
    ExampleStore.addChangeListener(this._update);

    //从接口拉数据
    this._getForm();
  },
  componentWillUnmount: function() {
    ExampleStore.removeChangeListener(this._update);
  },
  componentWillUpdate: function() {
    //随时保存表单数据的状态，以便判断数据是否变化，激活保存按钮。
    this.pushFormState(this.state.info);
  },
  _getForm: function() {
    ExampleAction.getForm();
  },
  _saveForm: function() {
    var that = this;
    this.allPassValidation(function(success) {
      if (success) {
        //执行Action
        ExampleAction.saveForm(that.state.info, function(msg) {
          Utils.prompt({
            text: '保存成功'
          });
          this.saveFormState(this.state.info);
        });
      }
    });
  },
  _update: function() {
    //传值，如果第一个参数中包含的字段在第二个参数中有值，则自动赋值给第二个参数。
    this.passValue(ExampleStore.getData(StoreConfig.STORE_EXAMPLE_FORM_DATA), this.state.info);
    //Model->View值转换
    this.state.info = this.valueTransform(this.state.info, 'staffs', this._staffTransformArrayToString);

    this.initFormData(this.state.info);
    this.forceUpdate();
  },
  _staffTransformArrayToString: function(value) {
    if (value instanceof Array) {
      return value.join(',');
    } else {
      return value;
    }
  },
  _staffTransformStringToArray: function(value) {
    if (!value) {
      return null;
    }
    value = value.trim();
    value = value.split(/,|，|;|；/);
    value = this.replaceEmptyItem(value);
    return value;
  },
  
  _nameMinLengthValidate: function(value) {
    if (this.state.info.name.length < 10) {
      return false;
    }
    return true;
  },
  _checkBox: function(value, checked) {
    this.state.info.visitor = checked
    this.setState({info: this.state.info});
  },
  render: function() {
    return (
      <div className="stardard-page">
       {/* 这是不使用Form组件的写法，不建议使用
       <div className="line">
          <div className="icon-star" style={{paddingLeft: 14}}>
            名称：
            <input type="text" placeholder="" value={this.state.info.name} onChange={this.createInputHandler(this.state.info, 'name')} style={{minWidth: UiConfig.defaultUrlInputWidth}} />
          </div>
          <RaValidation name='name' value={this.state.info.name} validate={this.state.validate} onValidate={this._onValidate}>
            <RaValidation.Rule type="required" message="名称不能为空。" />
            <RaValidation.Rule type="maxlength" params={20} message="名称最大长度不能超过20个字。" />
            <RaValidation.Rule type="custom" params={this._nameMinLengthValidate} message="自定义验证函数：名称不能少于10个字" />
          </RaValidation>
        </div>
        
        <div className="line">
          <div className="icon-star">
            {'管理员'}：
            <input type="text" placeholder="" value={this.state.info.staffs} onChange={this.createInputHandler(this.state.info, 'staffs')} style={{minWidth: UiConfig.defaultUrlInputWidth}} />
            <RaValidation name='staffs' value={this.state.info.staffs} validate={this.state.validate} rules={[{type: 'required', message: '管理员不能为空。'}]} onValidate={this._onValidate} />
            <div className="form-description" style={{paddingLeft: 75}}>
              {'请输入管理员QQ号，多个QQ以逗号分隔'}
            </div>
          </div>
        </div>
        <div className="line">
          <div style={{paddingLeft: 70}}>
            <button className="main" onClick={this._saveForm} disabled={!this.hasSaveStateChange()} >保存</button>
            <i className="ra-icon-help" style={{marginLeft: 8}}><RaTooltip content={"数据没有变化时保存按钮不能点击，数据变化后点击左侧导航栏切换页面会弹出提示"}></RaTooltip></i>
          </div>
        </div>
      */}
        <RaForm 
          data = {this.state.info}
          labelCol = {10} 
          contentCol = {50} 
          onSubmit = {{text:"确认", callback:this._saveForm, enable:this.isSubmitEnable()}}
        >
          <RaFormField label="名称：">
            <input type="text" placeholder="" value={this.state.info.name} onChange={this.createInputHandler(this.state.info, 'name')} />
            <RaFormValidation name="name" value={this.state.info.name} rules={[{type: 'required', message: '描述不能为空。'}]} validate={this.state.showAll} onValidate={this.onValidation} />
          </RaFormField>
          <RaFormField label="管理员："  desc="请输入管理员QQ号，多个QQ以逗号分隔">
            <input type="text" placeholder="" value={this.state.info.staffs} onChange={this.createInputHandler(this.state.info, 'staffs')} />
            <RaFormValidation name="staffs" value={this.state.info.staffs} rules={[{type: 'required', message: '描述不能为空。'}]}  validate={this.state.showAll} onValidate={this.onValidation}/>
          </RaFormField>
          <RaFormField>
            <RaCheckBox checked={this.state.info.visitor} onCheck={this._checkBox}>允许访客访问</RaCheckBox>
            <RaFormValidation name="visitor" value={this.state.info.visitor} rules={[{type: 'custom', params: function(value){return value}, message: '必须打钩'}]}  validate={this.state.showAll} onValidate={this.onValidation}/>
          </RaFormField>
        </RaForm>
      </div>
    );
  }
});
