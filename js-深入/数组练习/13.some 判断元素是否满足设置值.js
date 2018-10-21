let score=[
    {name:"xiaoming",score:90},
    {name:"xiaoming2",score:77},
    {name:"xiaoming3",score:84},
    {name:"xiaoming4",score:92},
    {name:"xiaoming5",score:40},
    {name:"xiaoming6",score:35},
    {name:"xiaoming7",score:69},
]
let some = score.some(item =>{
    console.log("第一次")
    return item.score>91
})
console.log(some)
//运行到第四次 找到92>91 返回ture值
//既只要有一个满足，就返回