// pages/category/category.js
import {getCateGoryData} from '../../service/category'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryTitle: [],
    categoryList: [],
    currentIndex: 0,
    scrollTop:0
  },

  cates : [],


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //使用缓存来提高性能，不用每次刷新页面都发送请求
    const cates = wx.getStorageSync('cates');
    if(!cates){
      //本地没值，发送请求
      this._getCateGoryData()
    }else {
      //本地有值，判断是否过期
      if(Date.now() - cates.time > 1000*10){
        this._getCateGoryData()
      }else {
        this.cates = cates.data;
        const cateTitle = this.cates.map(item => item.cat_name)
        //获取详细数据
        const cateList = this.cates[0].children;
        this.setData({
          categoryTitle: cateTitle,
          categoryList: cateList
        })
      }
    }
  },

  async _getCateGoryData(index){
    let res = await getCateGoryData();
    console.log(res)
    //获取所有的title
    this.cates = res.data.message;
    wx.setStorageSync('cates', {time: Date.now(), data: this.cates})
    const cateTitle = this.cates.map(item => item.cat_name)

    //获取详细数据
    const cateList = this.cates[0].children;
    this.setData({
      categoryTitle: cateTitle,
      categoryList: cateList
    })
  
 },
 hanleClick(event){
  let index = event.detail.index;
  let categoryList = this.cates[index].children;
  this.setData({
    currentIndex: index,
    categoryList,
    scrollTop: 0
  })
 }

})