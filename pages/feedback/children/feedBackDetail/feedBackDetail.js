// pages/feedback/children/feedBackDetail/feedBackDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    urlImg:{
      type: Object,
      value: []
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
    //添加图片
    handleImgClick(){
      this.triggerEvent('handleImgClick')
    },
    handleRemoveClick(event){
      let {index} = event.currentTarget.dataset;
      this.triggerEvent('handleRemoveClick',{index: index})
    }
  }
})
