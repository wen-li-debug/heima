// pages/cart/cart.js
import {getSetting, chooseAddress, openSetting, showModal, showToast} from '../../utils/aysncwx'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    address: {},
    cart: [],
    totalCount: 0,
    totalPrice: 0,
  },

//------------------------------其他事件--------------------------
  

  //用于封装一个改变状态的函数
  setCart(){

    //获取收货地址
    let address = wx.getStorageSync('address');
    //获取购物车数据
    let cart = wx.getStorageSync('cart') || []
    let totalCount = 0;
    let totalPrice = 0;
    //计算总件数和总价格
    cart.forEach(v =>{
      if(v.checked){
        totalCount += v.num;
        totalPrice += v.price * v.num;
      }
    })

    //列出checked为true值
    cart = cart.filter(v => v.checked);

    this.setData({
      totalCount,
      totalPrice,
      address,
      cart
    })
  },

  //跳转到授权
  colseClick(){
    let token = wx.getStorageSync('token');
    if(!token){
      wx.navigateTo({
        url: '/pages/auth/auth',
      })
    }else{
      console.log('获取到token')
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  demo(){
    let arr = [{id: 1,name: 'li'},{id: 1,name: 'wu'},{id: 1,name: 'fa'}];
    let ARRnew = arr.map(v=>({
      ...v,
      name: 'wu'
    }))
    console.log(ARRnew)
  },

  onShow: function () {
    this.setCart();
    this.demo()
  }
})