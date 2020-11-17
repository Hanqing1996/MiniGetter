//app.js
App({
    onLaunch: function () {
      this.observe(this.globalData.responsiveData)
    },
    globalData: {
        responsiveData: {
            count: 0
        }
    },
    
    
    observe: function (data) {
        Object.keys(data).map(key => {

            let value = data[key]
            
            if (typeof value == 'object') {
                this.observe(value)
            }
            
            Object.defineProperty(data, key, {
                get() {
                    console.log(`oh,you1 read the value of ${key}`);
                    return value
                },
                set(newValue) {
                    console.log(`oh,you1 change the value of ${key}`);
                    value = newValue
                },
                enumerable: true,
                configurable: true
            })
        })
    }
    
})