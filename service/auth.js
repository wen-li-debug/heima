import request from './network'

export function getAuth(params){
  return request({
    url: '/users/wxlogin',
    method: 'post',
    data: params
  })
}