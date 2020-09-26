// pages/cart/childcpn/bottomTap/bottom-tap.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalPrice: {
      type: Number,
      value: 0
    },
    totalCount: {
      type: Number,
      value: 0
    },
    allChecked: {
      type: Boolean,
      value: false
    },
    
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
    colseClick(){
      this.triggerEvent('colseClick')
    }
  }
})
