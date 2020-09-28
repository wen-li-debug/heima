// pages/search/search.js
import {_getSearchData, getSearchData} from '../../service/search'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: [],
    isShow: false,
    isValue: ''
  },
  //设置一个变量防抖使用
  TimeId: -1,
  inputClick(e){
    let {value} = e.detail;
    if(!value.trim()){
      //如果输入框没有值，隐藏取消按钮，清空输入框
      console.log(2)
      this.setData({
        isShow: false,
        goodsDetail: []
      })
      return;
    }
    this.setData({
      isShow: true
    })
    //设置防抖
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
    console.log(33)

      this._getSearchData(value)
    }, 1000);
  },

  //取消按钮
  handleBtnClick(){
    // this.setData({
    //   goodsDetail: [],
    //   isShow: false,
    //   isValue: ''
    // })
    
  },

  //------------------------------------网络请求------------------------------
  
  async _getSearchData(value){
    let res = await getSearchData({query: value});
    let goodsDetail = res.data.message.goods
    this.setData({
      goodsDetail,
      
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})