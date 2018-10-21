var arr1=[1,2,3,4]
var arr2=[...arr1]

console.log(arr2)
arr1[0] = 99
console.log(arr1)
console.log(arr2)
//复制一个独立的数组,还可以利用...将类数组转为数组


var str ="nihao"
var sp=[...str]
console.log(sp)
//将字符串转为数组


//合并数组
var arra=[1,2]
var arrb=[6,7]
var arrab=[...arra,...arrb]
console.log(arrab)