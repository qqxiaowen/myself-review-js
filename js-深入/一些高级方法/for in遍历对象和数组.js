var f= {
    name:"xiaoming",
    age:"22",
    abc:"nicai"

}
//不能使用for去便利，因为对象是无序的，得不到它的长度。
for( item in f){
    //遍历出对象f的属性名
    console.log(item);
    //遍历出对象f的属性值
    console.log(f[item])
}

// 使用for in 去遍历数组
var arr=[1,5,7,7,9]
for (item in arr){
    console.log(arr[item])
}