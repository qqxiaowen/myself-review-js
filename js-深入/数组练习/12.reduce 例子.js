let arr=[
    {name:"xiaoming",score:90},
    {name:"xiaoming2",score:77},
    {name:"xiaoming3",score:84},
    {name:"xiaoming4",score:92},
    {name:"xiaoming5",score:40},
    {name:"xiaoming6",score:35},
    {name:"xiaoming7",score:69},
]

var sum =arr.reduce((a,b)=>{
    return {score:a.score+b.score};
})
console.log(sum)

