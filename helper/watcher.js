export default class Watcher{
    constructor(entity,key,callback) {
        this.entity=entity
        this.key=key
        this.callback=callback
        this.init()
    }
    update(key,oldValue,newValue){
        if(key===this.key&&newValue!==oldValue){
            
            this.callback(newValue)
        }
    }
    init(){
        // 让原型挂载当前实例
        Watcher.target=this
        
        // 初始同步数据
        const app=getApp()
        let obj={}
        obj[this.key]=app.globalData.responsiveData[this.key]
        this.entity.setData(obj)
    }
}