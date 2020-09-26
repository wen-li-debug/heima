import request from './network'

//获取详情数据
export function getGoodsData(queryParams){
  return request({
    url: '/goods/search',
    data: queryParams
  })
}