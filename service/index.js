import request from './network';

//获取轮播图数据
export function getSwiperData(){
  return request({
    url: '/home/swiperdata'
  })
}

//获取导航数据
export function getNavData(){
  return request({
    url: '/home/catitems'
  })
}

//获取楼层floor数据
export function getFloorData(){
  return request({
    url: '/home/floordata'
  })
}