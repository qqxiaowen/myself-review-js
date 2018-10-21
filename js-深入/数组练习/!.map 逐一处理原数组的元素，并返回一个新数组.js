let arr = [1,2,3]
let map = arr.map (function(item,index,arr){
    item+=100;
    console.log(item)
    console.log(index)
    return item
})
//使用箭头函数
// let map2 =arr.map((item,index,arr)=>{
//     return item+=100;
// })
console.log(arr)
console.log(map)