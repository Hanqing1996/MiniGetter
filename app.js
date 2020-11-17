//app.js
import Watcher from "./helper/watcher";

App({
    onLaunch: function () {
      this.observe(this.globalData.responsiveData)
    },
    globalData: {
        responsiveData: {
            count: 0
        },
        watchers:[]
    },
    
    
    observe: function (data) {
        Object.keys(data).map(key => {

            let value = data[key]
            if (typeof value == 'object') {
                this.observe(value)
            }
            let that=this
            Object.defineProperty(data, key, {
                
                get() {
                    
                    
                    
                    
                    
                    setTimeout(()=> {
                        if (Watcher.target) {
                            that.globalData.watchers.push(Watcher.target)
                            Watcher.target = null
                        }
                    },0)

                    return value
                },
                set(newValue) {
                    
                    
                    
    
                    let oldValue=value
                    value = newValue
                    
                    
                    setTimeout(()=>{
                        that.globalData.watchers.map(watcher=>{
                            
                            watcher.update(key,oldValue,newValue)
                        })
                    })
                    

                    
                },
                enumerable: true,
                configurable: true
            })
        })
    }
})