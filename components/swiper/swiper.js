// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperData: {
      type: Array,
      value: []
    },
    widthImg: {
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
    maxImgClick(event){
      let url = event.currentTarget.dataset
      this.triggerEvent('maxClick', url)
    }
  }
})
