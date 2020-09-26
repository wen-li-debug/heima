// pages/user/childcpn/header-tap/header-tap.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  //跳转到登录界面
 

  /**
   * 组件的方法列表
   */
  methods: {
    loginClick(){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    },
  
  }
})
