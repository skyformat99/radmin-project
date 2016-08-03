var React = require('react');

var IconShow = React.createClass({
  render: function() {
    return (
      <li>
        <i className="icon tb-icon">{this.props.icon}</i>
        <div className="name">{this.props.name}</div>
        <div className="code">{this.props.code}</div>
        <div className="fontclass">{this.props.fontclass}</div>
      </li>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="stardard-page">
        自定义的字体图标：
        <ul className="icon_lists" style={{marginLeft: 30}}>
          <p>第一种用法：先定义字体图标整体的class，然后填入字体值。</p>
          <p>
            &lt;i className=&quot;custom-icon&quot;&gt;&amp;#xe646;&lt;/i&gt;
            <i className="icon custom-icon">&#xe646;</i>
          </p>
          <p>第二种用法：分别定义字体图标中每个图标的class，然后直接使用。</p>
          <p>
            &lt;i className=&quot;custom-icon-close&quot;&gt;&lt;/i&gt;
            <i className="icon custom-icon-close"></i>
          </p>
          <p>两种定义方式详见less/component/my-icon.less文件</p>
        </ul>
        <p>Radmin提供的图标：</p>
        <ul className="icon_lists">
          <IconShow icon="&#xe60b;" name="check" code="&amp;#xe60b;" fontclass=".check" />
          <IconShow icon="&#xe644;" name="appreciate" code="&amp;#xe644;" fontclass=".appreciate" />
          <IconShow icon="&#xe645;" name="check" code="&amp;#xe645;" fontclass=".check1" />
      
          <li>
            <i className="icon tb-icon">&#xe646;</i>
            <div className="name">close</div>
            <div className="code">&amp;#xe646;</div>
            <div className="fontclass">.close</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe649;</i>
            <div className="name">edit</div>
            <div className="code">&amp;#xe649;</div>
            <div className="fontclass">.edit</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe64a;</i>
            <div className="name">emoji</div>
            <div className="code">&amp;#xe64a;</div>
            <div className="fontclass">.emoji</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe64b;</i>
            <div className="name">favor_fill</div>
            <div className="code">&amp;#xe64b;</div>
            <div className="fontclass">.favorfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe64c;</i>
            <div className="name">favor</div>
            <div className="code">&amp;#xe64c;</div>
            <div className="fontclass">.favor</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe64f;</i>
            <div className="name">loading</div>
            <div className="code">&amp;#xe64f;</div>
            <div className="fontclass">.loading</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe650;</i>
            <div className="name">location_fill</div>
            <div className="code">&amp;#xe650;</div>
            <div className="fontclass">.locationfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe651;</i>
            <div className="name">location</div>
            <div className="code">&amp;#xe651;</div>
            <div className="fontclass">.location</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe652;</i>
            <div className="name">phone</div>
            <div className="code">&amp;#xe652;</div>
            <div className="fontclass">.phone</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe656;</i>
            <div className="name">round_check_fill</div>
            <div className="code">&amp;#xe656;</div>
            <div className="fontclass">.roundcheckfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe657;</i>
            <div className="name">round_check</div>
            <div className="code">&amp;#xe657;</div>
            <div className="fontclass">.roundcheck</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe658;</i>
            <div className="name">round_close_fill</div>
            <div className="code">&amp;#xe658;</div>
            <div className="fontclass">.roundclosefill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe659;</i>
            <div className="name">round_close</div>
            <div className="code">&amp;#xe659;</div>
            <div className="fontclass">.roundclose</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe65a;</i>
            <div className="name">round_right_fill</div>
            <div className="code">&amp;#xe65a;</div>
            <div className="fontclass">.roundrightfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe65b;</i>
            <div className="name">round_right</div>
            <div className="code">&amp;#xe65b;</div>
            <div className="fontclass">.roundright</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe65c;</i>
            <div className="name">search</div>
            <div className="code">&amp;#xe65c;</div>
            <div className="fontclass">.search</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe666;</i>
            <div className="name">comment_fill</div>
            <div className="code">&amp;#xe666;</div>
            <div className="fontclass">.commentfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe665;</i>
            <div className="name">camera</div>
            <div className="code">&amp;#xe665;</div>
            <div className="fontclass">.camera</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe664;</i>
            <div className="name">camera_fill</div>
            <div className="code">&amp;#xe664;</div>
            <div className="fontclass">.camerafill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe663;</i>
            <div className="name">warn</div>
            <div className="code">&amp;#xe663;</div>
            <div className="fontclass">.warn</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe662;</i>
            <div className="name">warn_fill</div>
            <div className="code">&amp;#xe662;</div>
            <div className="fontclass">.warnfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe661;</i>
            <div className="name">unfold</div>
            <div className="code">&amp;#xe661;</div>
            <div className="fontclass">.unfold</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe65f;</i>
            <div className="name">time</div>
            <div className="code">&amp;#xe65f;</div>
            <div className="fontclass">.time</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe65e;</i>
            <div className="name">time_fill</div>
            <div className="code">&amp;#xe65e;</div>
            <div className="fontclass">.timefill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe65d;</i>
            <div className="name">taxi</div>
            <div className="code">&amp;#xe65d;</div>
            <div className="fontclass">.taxi</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe667;</i>
            <div className="name">comment</div>
            <div className="code">&amp;#xe667;</div>
            <div className="fontclass">.comment</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe668;</i>
            <div className="name">like_fill</div>
            <div className="code">&amp;#xe668;</div>
            <div className="fontclass">.likefill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe669;</i>
            <div className="name">like</div>
            <div className="code">&amp;#xe669;</div>
            <div className="fontclass">.like</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe66a;</i>
            <div className="name">notification_fill</div>
            <div className="code">&amp;#xe66a;</div>
            <div className="fontclass">.notificationfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe66b;</i>
            <div className="name">notification</div>
            <div className="code">&amp;#xe66b;</div>
            <div className="fontclass">.notification</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe66c;</i>
            <div className="name">order</div>
            <div className="code">&amp;#xe66c;</div>
            <div className="fontclass">.order</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe66d;</i>
            <div className="name">same_fill</div>
            <div className="code">&amp;#xe66d;</div>
            <div className="fontclass">.samefill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe66e;</i>
            <div className="name">same</div>
            <div className="code">&amp;#xe66e;</div>
            <div className="fontclass">.same</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe671;</i>
            <div className="name">deliver</div>
            <div className="code">&amp;#xe671;</div>
            <div className="fontclass">.deliver</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe67e;</i>
            <div className="name">discover</div>
            <div className="code">&amp;#xe67e;</div>
            <div className="fontclass">.discover</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe67c;</i>
            <div className="name">cascades</div>
            <div className="code">&amp;#xe67c;</div>
            <div className="fontclass">.cascades</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe679;</i>
            <div className="name">back</div>
            <div className="code">&amp;#xe679;</div>
            <div className="fontclass">.back</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe678;</i>
            <div className="name">wang</div>
            <div className="code">&amp;#xe678;</div>
            <div className="fontclass">.wang</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe677;</i>
            <div className="name">ticket</div>
            <div className="code">&amp;#xe677;</div>
            <div className="fontclass">.ticket</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe676;</i>
            <div className="name">shop</div>
            <div className="code">&amp;#xe676;</div>
            <div className="fontclass">.shop</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe675;</i>
            <div className="name">send</div>
            <div className="code">&amp;#xe675;</div>
            <div className="fontclass">.send</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe673;</i>
            <div className="name">pay</div>
            <div className="code">&amp;#xe673;</div>
            <div className="fontclass">.pay</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe672;</i>
            <div className="name">evaluate</div>
            <div className="code">&amp;#xe672;</div>
            <div className="fontclass">.evaluate</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe682;</i>
            <div className="name">list</div>
            <div className="code">&amp;#xe682;</div>
            <div className="fontclass">.list</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe684;</i>
            <div className="name">more</div>
            <div className="code">&amp;#xe684;</div>
            <div className="fontclass">.more</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe685;</i>
            <div className="name">my_fill</div>
            <div className="code">&amp;#xe685;</div>
            <div className="fontclass">.myfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe686;</i>
            <div className="name">my</div>
            <div className="code">&amp;#xe686;</div>
            <div className="fontclass">.my</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe689;</i>
            <div className="name">scan</div>
            <div className="code">&amp;#xe689;</div>
            <div className="fontclass">.scan</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe68a;</i>
            <div className="name">settings</div>
            <div className="code">&amp;#xe68a;</div>
            <div className="fontclass">.settings</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe690;</i>
            <div className="name">question_fill</div>
            <div className="code">&amp;#xe690;</div>
            <div className="fontclass">.questionfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe691;</i>
            <div className="name">question</div>
            <div className="code">&amp;#xe691;</div>
            <div className="fontclass">.question</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe697;</i>
            <div className="name">shop_fill</div>
            <div className="code">&amp;#xe697;</div>
            <div className="fontclass">.shopfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6a3;</i>
            <div className="name">right</div>
            <div className="code">&amp;#xe6a3;</div>
            <div className="fontclass">.right</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6a0;</i>
            <div className="name">pull_up</div>
            <div className="code">&amp;#xe6a0;</div>
            <div className="fontclass">.pullup</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe69f;</i>
            <div className="name">pull_down</div>
            <div className="code">&amp;#xe69f;</div>
            <div className="fontclass">.pulldown</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe69e;</i>
            <div className="name">top</div>
            <div className="code">&amp;#xe69e;</div>
            <div className="fontclass">.top</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe69d;</i>
            <div className="name">footprint</div>
            <div className="code">&amp;#xe69d;</div>
            <div className="fontclass">.footprint</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe69c;</i>
            <div className="name">filter</div>
            <div className="code">&amp;#xe69c;</div>
            <div className="fontclass">.filter</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe69b;</i>
            <div className="name">pic</div>
            <div className="code">&amp;#xe69b;</div>
            <div className="fontclass">.pic</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe69a;</i>
            <div className="name">wang_fill</div>
            <div className="code">&amp;#xe69a;</div>
            <div className="fontclass">.wangfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6f6;</i>
            <div className="name">light_auto</div>
            <div className="code">&amp;#xe6f6;</div>
            <div className="fontclass">.lightauto</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6ff;</i>
            <div className="name">service</div>
            <div className="code">&amp;#xe6ff;</div>
            <div className="fontclass">.service</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6fe;</i>
            <div className="name">search_list</div>
            <div className="code">&amp;#xe6fe;</div>
            <div className="fontclass">.searchlist</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6fd;</i>
            <div className="name">flashlight_open</div>
            <div className="code">&amp;#xe6fd;</div>
            <div className="fontclass">.flashlightopen</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6fc;</i>
            <div className="name">flashlight_close</div>
            <div className="code">&amp;#xe6fc;</div>
            <div className="fontclass">.flashlightclose</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6fb;</i>
            <div className="name">bar_code</div>
            <div className="code">&amp;#xe6fb;</div>
            <div className="fontclass">.barcode</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6fa;</i>
            <div className="name">light</div>
            <div className="code">&amp;#xe6fa;</div>
            <div className="fontclass">.light</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6f9;</i>
            <div className="name">camera_rotate</div>
            <div className="code">&amp;#xe6f9;</div>
            <div className="fontclass">.camerarotate</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6f8;</i>
            <div className="name">light_fill</div>
            <div className="code">&amp;#xe6f8;</div>
            <div className="fontclass">.lightfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe6f7;</i>
            <div className="name">light_forbid</div>
            <div className="code">&amp;#xe6f7;</div>
            <div className="fontclass">.lightforbid</div>
          </li>
          <li>
            <i className="icon tb-icon">&#xe700;</i>
            <div className="name">sort</div>
            <div className="code">&amp;#xe700;</div>
            <div className="fontclass">.sort</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe702;</i>
            <div className="name">1212</div>
            <div className="code">&amp;#xe702;</div>
            <div className="fontclass">.1212</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe703;</i>
            <div className="name">down</div>
            <div className="code">&amp;#xe703;</div>
            <div className="fontclass">.down</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe704;</i>
            <div className="name">mobile</div>
            <div className="code">&amp;#xe704;</div>
            <div className="fontclass">.mobile</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe705;</i>
            <div className="name">mobile_fill</div>
            <div className="code">&amp;#xe705;</div>
            <div className="fontclass">.mobilefill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe706;</i>
            <div className="name">copy</div>
            <div className="code">&amp;#xe706;</div>
            <div className="fontclass">.copy</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe742;</i>
            <div className="name">read</div>
            <div className="code">&amp;#xe742;</div>
            <div className="fontclass">.read</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe74b;</i>
            <div className="name">cut</div>
            <div className="code">&amp;#xe74b;</div>
            <div className="fontclass">.cut</div>
          </li>

          <li>
            <i className="icon tb-icon">&#xe74c;</i>
            <div className="name">magic</div>
            <div className="code">&amp;#xe74c;</div>
            <div className="fontclass">.magic</div>
          </li>

          <li>
            <i className="icon tb-icon">&#xe74d;</i>
            <div className="name">backward_fill</div>
            <div className="code">&amp;#xe74d;</div>
            <div className="fontclass">.backwardfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe74e;</i>
            <div className="name">forward_fill</div>
            <div className="code">&amp;#xe74e;</div>
            <div className="fontclass">.forwardfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe74f;</i>
            <div className="name">play_fill</div>
            <div className="code">&amp;#xe74f;</div>
            <div className="fontclass">.playfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe750;</i>
            <div className="name">stop</div>
            <div className="code">&amp;#xe750;</div>
            <div className="fontclass">.stop</div>
          </li>

          <li>
            <i className="icon tb-icon">&#xe751;</i>
            <div className="name">tag_fill</div>
            <div className="code">&amp;#xe751;</div>
            <div className="fontclass">.tagfill</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe752;</i>
            <div className="name">tag</div>
            <div className="code">&amp;#xe752;</div>
            <div className="fontclass">.tag</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe753;</i>
            <div className="name">group</div>
            <div className="code">&amp;#xe753;</div>
            <div className="fontclass">.group</div>
          </li>
      
          <li>
            <i className="icon tb-icon">&#xe754;</i>
            <div className="name">move</div>
            <div className="code">&amp;#xe754;</div>
            <div className="fontclass">.move</div>
          </li>

          <li>
            <i className="icon tb-icon">&#xe756;</i>
            <div className="name">arrow</div>
            <div className="code">&amp;#xe756;</div>
            <div className="fontclass">.move</div>
          </li>
        </ul>
      </div>
    );
  },
});
