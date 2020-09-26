// pages/goodList/goodList.js
import {getGoodsData } from '../../service/goodList'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['经典','流行','精选'],
    queryParams: {
      query: '',
      cid: '',
      pagenum: 1,
      pagesize: 10
    },
    goods: []
  },
  totalPages: 1,
  //-------------------------------网络请求-------------------------------------

  async _getGoodsData(){
    const res = await getGoodsData(this.data.queryParams);
    //总条数
    const total = res.data.message.total;
    //计算总页数
    this.totalPages = Math.ceil(total / this.data.queryParams.pagesize)
    this.setData({
      goods: [...this.data.goods ,...res.data.message.goods]
    })

    //下拉刷新请求玩之后关闭刷新
    wx.stopPullDownRefresh()
  },
  //-------------------------------其他请求-------------------------------------

  handlecontral(event){
    let {index} = event.detail
    console.log(index)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let iid = options.iid;
    this.setData({
      'queryParams.cid': iid
    })
    this._getGoodsData()
  },
  /**
   * 上拉刷新
   */
  onReachBottom(){
    if(this.totalPages <= this.data.queryParams.pagenum){
      wx.showToast({
        title: '没有数据了',
      })
    }else{
      let pagenum = this.data.queryParams.pagenum
      this.setData({
        'queryParams.pagenum': pagenum + 1
      })
      this._getGoodsData()
    }
  },
  
  /**
   * 下拉刷新
   */
  onPullDownRefresh(){
    this.setData({
      goods: [],
      'queryParams.pagenum': 1
    })
    this._getGoodsData()
  }
})