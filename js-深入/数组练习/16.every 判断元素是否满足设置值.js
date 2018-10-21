let score=[
    {name:"xiaoming",score:90},
    {name:"xiaoming2",score:77},
    {name:"xiaoming3",score:84},
    {name:"xiaoming4",score:92},
    {name:"xiaoming5",score:40},
    {name:"xiaoming6",score:35},
    {name:"xiaoming7",score:69},
]

let every = score.every(item =>{
    console.log("几次")
    return item.score>39
})
console.log(every)
//只要有一个不满足 就返回flase 中止查询
// 所有的都满足，菜返回true