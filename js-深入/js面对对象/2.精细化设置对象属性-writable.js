// writable 是否可以修改此属性，默认值是ture（可以s）
var obj = {name : "豆豆"}
console.log(obj.name)
obj.name="旺财"
console.log(obj.name)
//设置格式  Object.defineProperty(对象名，“属性名”,{内容})
Object.defineProperty(obj,"name",{
    writable:false
})
obj.name="贝贝"
console.log(obj.name)
