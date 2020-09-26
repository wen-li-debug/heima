import {getSwiperData, getNavData, getFloorData } from '../../service/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [],
    navData: [],
    floorData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getSwiperData();
    this._getNavData();
    this._getFloorData();
  },

  //轮播图数据
  async _getSwiperData(){
    let res = await getSwiperData()
      this.setData({
        swiperData: res.data.message
      })
  },
  //导航数据
  async _getNavData(){
    let res = await getNavData()
      this.setData({
        navData: res.data.message
      })
  },

  //获取楼层数据floor
  async _getFloorData(){
    let res = await getFloorData()
      this.setData({
        floorData: res.data.message
      })
  }
  
})