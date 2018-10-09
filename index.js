let UAUtil = {
  //获取客户端的类型
  isAndroidClient: function() {
    //判断是否是安卓的客户端
    if (navigator.userAgent.match(/Android/ig)) {
      return true;
    } 
    return false;
  },
  isIosClient: function() {
    //判断是否是ios的客户端
    if (navigator.userAgent.match(/iphone|ipod|iPad/ig)) {
      return true;
    } 
    return false;
  },
  getClientType: function() {
    //如果是安卓的客户端返回android
    if(navigator.userAgent.match(/Android/ig)){
      return "android";
    //如果是ios的客户端返回ios
    } else if(navigator.userAgent.match(/iphone|ipod|iPad/ig)) {
      return "ios";
    //其他情况返回other
    } else {
	    return "other"; 
	  }
  },
  isWechatClient: function() {
    //判断是否是微信打开
    if(navigator.userAgent.match(/MicroMessenger/ig)) {
      return true;
    }
    return false;
  },
	isMobile: function() {
		//判断是否是移动端
		if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|opera mini|opera mobile/ig)){
			return true;
		}
		return false;
	},
  isAppClient: function(clientstr){
    //美丽中国的ua是BeautifulChina
    if(navigator.userAgent.indexOf(clientstr) != -1){
      return true;
    }
    return false;
  }
}

module.exports = UAUtil
