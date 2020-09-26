//用于优化微信接口

//获取收货地址权限
export function getSetting(){
  return new Promise((resolve,reject) =>{
    wx.getSetting({
      success: resolve,
      fail: reject
    })
  })
}
//获取地址
export function chooseAddress(){
  return new Promise((resolve,reject) =>{
    wx.chooseAddress({
      success: resolve,
      fail: reject
    })
  })
}
//打开收货地址权限
export function openSetting(){
  return new Promise((resolve,reject) =>{
    wx.openSetting({
      success: resolve,
      fail: reject
    })
  })
}


//购物车提示是否删除
export function showModal({content}){
  return new  Promise((resolve,reject) =>{
    wx.showModal({
      title: '提示',
      content,
      success: resolve,
      fail: reject
    })
  })
}

//购物车结算
export function showToast({title}){
  return new  Promise((resolve,reject) =>{
    wx.showToast({
      title,
      mask: true,
      success: resolve,
      fail: reject
    })
  })
}

//支付授权获取code
export function login(){
  return new  Promise((resolve,reject) =>{
    wx.login({
      timeout: 1000,
      success: resolve,
      fail: reject
    })
  })
}