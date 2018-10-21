// // 声明函数
//  function f(){};
//  //函数声明
//  console.log(f());

// // 书写格式
//  var a= function(){
//      console.log("我是普通书写的函数")
//  }
//  var b =()=>{
//     console.log("我是es6中新的函数书写格式")
//  };
//  a(); b();

// // 函数的类型  放在浏览器中查看
// function x(){};
// console.log(x)
// console.log( typeof x)
// //打印中x的值是ƒ x(){} 类型是function;

// // 函数的形参和实参
// // 形参：在定义的时候指定的参数。
// // 实参：在调用的时候出入的实际参数，具体的某一个值
// let r = function (x,y){
//     return x+y;
// }
// console.log(r(4,3))
// let s=(x,y) =>{
//     return x*y;
// }
// console.log(s(9,8))

// //若形参大于实参
// function a(a,b,c,d,e){
//     console.log(a,b,c,d,e);
// }
// console.log(a(1,2,3))//最后多打印的一个undefined 是函数的return值

// 书写格式2.0
function f1(x){
    return x*x;
}
let f2 = (x) =>{
    return x*x;
}
console.log(f1(2))
console.log(f2(3))
//若形参只有一个 可以将()给省略了
let f3 = x =>{
    return x*x;
}
console.log(f3(4))
//若函数块中只有一句语句，可以讲{}省略
let f4 = x =>console.log(x);
console.log(f4(7))// 多打印了一个undefined是因为函数有默认的返回值
//若函数快中只有一句语句并且是return语句，那么return可可以省略
let f5 = x => x*x;
console.log(f5(5));
