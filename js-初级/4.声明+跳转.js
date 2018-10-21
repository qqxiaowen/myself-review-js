// //let 用let声明语句 声明的语句不会提升
// console.log(a);
// let a=1;
// console.log(a);

// //const 声明常量 不可改变
// const pi =3.14
// pi=7
// console.log(pi)

// // 使用break中指循环
// let i = 3
// switch (i) {
//     case 1:
//         console.log("这是1");
//         break;
//     case 2:
//         console.log("这是2");
//         break;
//     case 3:
//         console.log("这是3");
//         break;
//     case 4:
//         console.log("这是4");
//         break;
//     default:
//         break;
// }

// //使用 continue 中止本次循环
// for(i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }

// // return 跳转 return之后的语句将不会再执行。
// let f=function(x){
//     return x*x;
//     console.log("我会被打印么？")
// }
// console.log(f(7))