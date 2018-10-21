var obj ={
    abc:"123"
}
console.log(obj.abc)
//设置格式  Object.defineProperty(对象名，“属性名”,{内容})
// configurable 表示属性是否可以删除，默认是ture（可以删除）
Object.defineProperty(obj,"abc",{
    configurable:false
})
delete obj.abc;
console.log(obj.abc)
//configurable 一旦设置不能删除，那么就不嫩给它再修改回来，否则会报错。