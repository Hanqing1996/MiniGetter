const app=getApp()
import {getter} from '../../helper/getter'

Page({
  data: {
    count:-1
  },
  onLoad: function () {
    getter.call(this,'count')
    
    
  
    
    
    
    
    
    
  },
  addCount:function () {
    app.globalData.responsiveData.count+=10
  }
})
