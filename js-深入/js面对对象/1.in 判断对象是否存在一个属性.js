// var obj ={
//     a:"aaa",
//     b:"bbb"
// }
// // in 是运算符 "属性名" in 对象名 
// // in 除了在自己本身的属性里找，还会在它的原型对象属性中找
// console.log("a" in obj);
// console.log("c" in obj); 
// console.log("---------------")   
// console.log("__proto__" in obj)
// console.log("---------------")   
// console.log("concat" in obj.__proto__)




// 在数组中使用in in前面的指的是数组的索引
var arr =[1,3,5,7,9]
console.log(0 in arr)
console.log(1 in arr)
console.log(2 in arr)
console.log(3 in arr)
console.log(4 in arr)
console.log(5 in arr)
console.log("--------------")
// in不能像如下这么用，有错
console.log(arr[-3] in arr)
console.log(arr[-2] in arr)
console.log(arr[-1] in arr)
console.log(arr[0] in arr)
console.log(arr[1] in arr)
console.log(arr[2] in arr)
console.log(arr[3] in arr)
console.log(arr[4] in arr)
console.log(arr[5] in arr)
console.log(arr[7] in arr)
console.log(arr[9] in arr)
