// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['体验问题','商品,商家投诉'],
    //加载的图片
    urlImg: []
  },

  handleImgClick(){
    //打开图片api
    wx.chooseImage({
      //同时选中图片的数量
      count: 9,
      //图片的格式  原图， 压缩
      sizeType: ['original','compressed'],
      //图片的来源  相册，照相机
      sourceType: ['album','camera'],
      success: (result)=>{
        this.setData({
          urlImg: [...this.data.urlImg,...result.tempFiles]
        })
      }
    })
  },
  handleRemoveClick(event){
    let {index} = event.detail;
    console.log(index)
    let urlImg = this.data.urlImg;
    urlImg.splice(index,1)
    this.setData({
      urlImg
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