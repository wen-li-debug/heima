// pages/cart/cart.js
import {getSetting, chooseAddress, openSetting, showModal, showToast} from '../../utils/aysncwx'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    allChecked: false
  },

//------------------------------其他事件--------------------------

//获取收货地址
  async addressClick(){
    try {
      //获取状态
      let res1 = await getSetting();
      let falg = res1.authSetting['scope.address'];
      //用户点击取消，进入设置权限
      if(falg === false){
        let res2 = await openSetting();
      }
      //获取收货地址
      let address = await chooseAddress();
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
      wx.setStorageSync('address', address)
    } catch (error) {
      console.log(error)
    }
  },


  //checked值修改
  checkedClick(event) {
    let {goods_id} = event.detail
    let cart = wx.getStorageSync('cart');
    cart.forEach(v => {
      if(v.goods_id === goods_id){
        v.checked = !v.checked
      }
    })
    this.setCart(cart)
  },

//全选和反选
  allCheckedClick(){
    //当allChecked 为 true, 全部选中
    let {cart,allChecked} = this.data
    allChecked = !allChecked;
    cart.forEach(v => v.checked = allChecked);
    this.setCart(cart)
  },

  //加减num
  async editNumClick(event){
    let {id,num} = event.detail;
    let {cart} = this.data;
    let index = cart.findIndex(v => v.goods_id === id);
    //判断件数 = 1 并且 用户点击了 -1
    if(cart[index].num === 1 && num === -1){
      let res = await showModal({content: "是否需要删除?"});
      if(res.confirm){
        cart.splice(index,1)
        this.setCart(cart)
      }
    }else{
      //用户点击了取消
      cart[index].num += num;
      this.setCart(cart)
    }
  },

  //用于封装一个改变状态的函数
  setCart(cart){
    let allChecked = true;
    let totalCount = 0;
    let totalPrice = 0;
    cart.forEach(v =>{
      if(v.checked){
        //计算总件数和总价格
        totalCount += v.num;
        totalPrice += v.price * v.num;
      }else{
        allChecked = false
      }
    })
    //判断allChecked
    allChecked = cart.length? allChecked : false
    this.setData({
      allChecked,
      totalCount,
      totalPrice,
      cart
    })
    wx.setStorageSync('cart', cart)
  },

  //结算
  async colseClick(){
    //先确认是否填写了收货地址
    let {address} = this.data;
    if(!address.userName){
        let res = await showToast({title: '请选择收货地址'})
        return;
    }
    if(this.data.totalCount === 0){
       let res = await showToast({title: '请选择商品'})
       return;
    }
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取收货地址
    let address = wx.getStorageSync('address');
    this.setData({
      address
    });
    //获取购物车数据
    let cart = wx.getStorageSync('cart') || []
    //计算总的件数和价格
    this.setCart(cart)
    this.setData({
      cart,
    })
  }
})