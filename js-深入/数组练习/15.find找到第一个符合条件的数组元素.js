let arr=[
    {name:"xiaoming",score:90},
    {name:"xiaoming2",score:77},
    {name:"xiaoming3",score:84},
    {name:"xiaoming4",score:92},
    {name:"xiaoming5",score:40},
    {name:"xiaoming6",score:35},
    {name:"xiaoming7",score:40},
]
let find = arr.find(item=>item.score =="40");
// 找到第一个就停止查找并返回元素，都找不到返回undefined
console.log(find)
//找到第一个符合的就停止查找并返回索引，都找不到返回-1
let findIndex = arr.findIndex(item => item.score=="31")
console.log(findIndex)