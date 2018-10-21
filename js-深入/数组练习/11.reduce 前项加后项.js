let arr=[1,1,2,3,45,8,7,9,7,8]

//累加 prve 代表前一项 next表后一项
var num = arr.reduce((prve,next)=>{
    return prve + next;
})
console.log(num)

//带初始值
var num2 =arr.reduce((a,b)=>{
    return a+b;
},8)
console.log(num2)