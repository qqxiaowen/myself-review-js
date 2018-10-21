var arr =[1,3,5,7]
console.log(arr.join())
//此时能打印出1,3,5,7，出名join属性存在，它是proto中的属性，是原型属性


//给arr手动添加一个join
arr.join =function(){
    console.log("你好")
}
console.log(arr.join())
//此时打印出的join方法就是自己写的
//原型属性不能删除！