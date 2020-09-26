// pages/cart/childcpn/cartDetail/cartDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cart:{
      type: {}
    },
    isShow: {
      type: Boolean,
      value: false
    },
    isCollect: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkedClick(event){
      let {goods_id} = event.currentTarget.dataset
      this.triggerEvent('checkedClick',{goods_id:goods_id})
    },
    editNum(event){
      let {id,num} = event.currentTarget.dataset
      this.triggerEvent('editNumClick',{id: id, num: num})
    }
  }
})
