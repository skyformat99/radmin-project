module.exports = {
  //设置用户可使用的登录方式：'oa'代表oa登录，'qq'代表qq登录，both代表qq和oa两种方式任选，'qc'代表qq互联登录，不区分大小写
  loginMode: 'qc',
  
  /* 这是OA登录需要的配置，要改为自己项目对应的值
   * sysid在tof.oa.com上申请，并且tof上允许的ip要加入以下内容：
   * 172.27.22.11,10.198.143.178,10.208.128.155,172.27.208.21,10.185.4.95,10.219.146.107,10.219.146.172,10.219.146.174,10.223.148.234
   */
  appkey: '767ef78e03294ce0867e7d6879065910',
  sysid: '24330',
  
  /* 这是QQ互联登录需要的配置，要改为自己项目对应的值
   * 这两个值在QQ互联官网http://connect.qq.com/申请
   */
  appid: '101317089',
  redirecturi: 'http://qq.com',
  
  //是否采用跳转到notlogin页面的方式
  jumpToNotLoginPage: false
};
