import request from './network'

export function getSearchData(query){
  return request({
    url: '/goods/search',
    data: query
  })
}