// //var会自动提升到上面
// console.log(a);
// var a = 111;

// //函数也会自动提升
// a();
// function a(){
//     console.log("这是一个函数")
// }

// // 变量的提升
// console.log(x);
// var x=55;
// console.log(x);

// //for循环内部变量的提升(必须加var)
// console.log(i);
// for(var i=0; i>8; i++){
// }
// console.log(i);
// //函数内部变量也提升，提升到函数内部的最上面
// function f(){
//     console.log(c);
//     var c=111;
//     console.log(c);
// }
// f();
