// pages/goodDetail/w-detail/w-detail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsDetail: {
      type: Object,
      value: {}
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
    collectClick(){
      this.triggerEvent('collectClick')
    }
  }
})
