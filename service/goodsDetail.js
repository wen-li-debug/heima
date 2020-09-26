import request from './network'

export function getGoodsDetail(goods_id){
  return request({
    url: '/goods/detail',
    data: {
      goods_id
    }
  })
}

export class Detail {
  constructor(goodsDetail){
    this.goods_id = goodsDetail.goods_id,
    this.pics_big = goodsDetail.pics[0].pics_big,
    this.price = goodsDetail.goods_price,
    this.goods_name = goodsDetail.goods_name,
    this.goods_introduce = goodsDetail.goods_introduce
  }
}