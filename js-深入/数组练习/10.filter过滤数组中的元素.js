var arr= [1,2,3,4,7]

var filter = arr.filter(function(item){
    console.log(item)
    return item<3;
})
console.log(filter)
console.log(arr)