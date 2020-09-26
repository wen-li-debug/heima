// pages/user/childcpn/container/container.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    order: [{
      icon: "iconfont icon-ding_huabanfuben",
      title: "全部订单"
    },{
      icon: "iconfont icon-fukuantongzhi",
      title: "待付款"
    },{
      icon: "iconfont icon-che",
      title: "待改货"
    },{
      icon: "iconfont icon-qian",
      title: "退款/退货"
    }],
    collect: [{
      num: 0,
      title: "收藏的店铺"
    },{
      num: 0,
      title: "收藏的商品"
    },{
      num: 0,
      title: "关注的商品"
    },{
      num: 0,
      title: "我的足迹"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
