import { BaseUrl } from "./config"
//用于记录请求的次数
let ajaxtime = 0
export default function(options){
  ajaxtime++;
  //显示请求加载
  wx.showLoading({
    title: '加载中',
    mask: true
  })
  return new Promise((resolve,reject) =>{
    wx.request({
      url: BaseUrl + options.url,
      mothod: options.mothod,
      data: options.data,
      success: resolve,
      fail: reject,
      complete:()=>{
        ajaxtime--;
        if(ajaxtime === 0){
          wx.hideLoading();
        }
      }
    })
  })
}