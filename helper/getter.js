import Watcher from "./watcher";
const app=getApp()
/**
 * @param syncData
 * @param changedData
 */
export const getter=function(key){
    
    let that=this
    new Watcher(that,key,(newValue)=>{
        let obj={}
        obj[key]=newValue
        
        that.setData(obj)
    })
}
