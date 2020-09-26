// pages/category/childcpn/leftCategory/leftCartegory.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categoryTitle:{
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number,
      value: 0
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
    currenClick(event){
      this.triggerEvent('hanleClick',{index: event.currentTarget.dataset.index})
    }
  }
})
