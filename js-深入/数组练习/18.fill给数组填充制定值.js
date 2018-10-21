let arr =new Array(5);
arr.fill("!!");
console.log(arr)

//fill方法会覆盖之前的元素
let arr1= [1,2,3,45,6,7]
arr1.fill("你好")
console.log(arr1)

//制定填充的位置 左闭右开区间
let arr2 =new Array(7);
arr2.fill("!",0,2)
console.log(arr2)