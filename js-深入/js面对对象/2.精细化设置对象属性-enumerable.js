var obj = {
    a: "1",
    b: "2",
    c: "3"
}
for( var item in obj){
    console.log(item)
}
//设置格式  Object.defineProperty(对象名，“属性名”,{内容})
// enumerable 设置属性是否可以枚举，默认是ture（可以）
Object.defineProperty(obj,"a",{
    enumerable:false
})
console.log("----------------")
for( item in obj){
    console.log(item)
}