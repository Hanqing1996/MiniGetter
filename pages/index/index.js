const app=getApp()
import {getter} from '../../helper/getter'

Page({
  data: {
    count:-1
  },
  onLoad: function () {
    getter(this.data.count,app.globalData.responsiveData.count)
  
    console.log(app.globalData.responsiveData.count);
  
    app.globalData.responsiveData.count=2
  }
})
