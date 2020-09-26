import request from './network';

//获取分类数据

export function getCateGoryData(){
  return request({
    url: '/categories'
  })
}
