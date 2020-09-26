// pages/goodDetail/goodDetail.js
import {getGoodsDetail, Detail} from '../../service/goodsDetail'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: {},
    picsImg: [],
    isCollect: false
  },

  //--------------------------------网络请求------------------------------
  async _getGoodsDetail(goods_id){
    let res = await getGoodsDetail(goods_id)
    console.log(res)
    let data = res.data.message
    let detail = new Detail(data)
    this.setData({
      goodsDetail: detail,
      picsImg: data.pics
    })
    let collect = wx.getStorageSync('collect') || [];
    let isCollect = collect.some(v => v.goods_id === this.data.goodsDetail.goods_id)
    this.setData({
      isCollect
    })
  },


  
  //--------------------------------其他请求------------------------------
  //点击图片将图片放大显示
  maxClick(e){
    let urls = this.data.picsImg.map(v => v.pics_big)
    let current = e.detail.url
    //微信自带api  点击图片放大显示，需要 1.点击图片的current 和 需要显示图片的urls 
    wx.previewImage({
      urls,
      current, 
    })
  },
  //加入购物车
  addCard(){
   
    //先重本地取出物品
    let cart = wx.getStorageSync('cart') || [];
    //判断购物车中是否有现在选中的物品
    let index = cart.findIndex(v => v.goods_id === this.data.goodsDetail.goods_id)
    if(index === -1){
      //没有，添加num
      this.data.goodsDetail.num = 1;
      this.data.goodsDetail.checked = true;
      cart.push(this.data.goodsDetail)
    }else {
      //有，num++
      cart[index].num++;
    }
    //添加到本地
    wx.setStorageSync('cart',cart)
    wx.showToast({
      title: '加入购物车成功',
      mask: true
    })
  },

  //收藏
  collectClick(){
    //先查看缓存中是否有点击的商品
    const collect = wx.getStorageSync('collect') || [] ;
    //查询是否点击商品存在缓存中
    let index = collect.findIndex(v => v.goods_id === this.data.goodsDetail.goods_id)
    let isCollect = false;
    if(index === -1){
      //缓存中没有此商品,添加商品
      collect.push(this.data.goodsDetail)
      isCollect = true;
    }else{
      //缓存中存在此商品,删除商品
      collect.splice(index,1)
      isCollect = false;
    }
    //将collect放回缓存中
    wx.setStorageSync('collect', collect)
    this.setData({
      isCollect
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    //获取跳转过来所以的对象
    const pages = getCurrentPages();
    //获取最近的一个对象
    const currentPage = pages[pages.length - 1];
    //获取参数
    let {goods_id} = currentPage.options
    this._getGoodsDetail(goods_id)
  }
})