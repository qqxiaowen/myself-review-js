// //setTimeout 浏览器隔x毫秒，执行function内语句
// setTimeout(function(){
//     console.log("biebie")
// },1000)

// //setInterval 浏览器每隔x毫秒，执行function内语句
// setInterval(function(){
//     console.log("饿饿")
// },1000)

//用es6中的箭头函数来书写
// setTimeout
// setTimeout( ()=>{
//     console.log("有点饿了")
// })

// // setInterval 
// setInterval( ()=>{
//     console.log("明天干什么呢？？")
// },1000)

// //用 setTimeout 替代 setIntercval
// function time(){
//     console.log("fafa")
//     setTimeout(time,1000);
// }
// time();
let leilei = ()=>{
    console.log("leilei");
    setTimeout(leilei,1000);
}
leilei()