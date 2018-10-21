//arguments 是函数内部的属性，只能在函数内部使用，
//调用函数时，把所有的实参收集起来，放到了argumetns当中
//arguments 是类数组,可以用Array.from或者...转为真数组

// 转真数组
// function f(){
//     console.log(Array.isArray(arguments));
//     var rs =Array.from(arguments)
//     console.log(Array.isArray(rs))
// }
// f()

//运用argumentsji对象求最值
function f(){
    var max=arguments[0];
    for(i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    console.log(max)
}
f(7,77,88,777,1,55)

//欲动arguments实现累加
function g(){
    var sum=0;
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum);
}
g(1,3,5,7)