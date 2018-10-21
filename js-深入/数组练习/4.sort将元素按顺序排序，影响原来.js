var arr1= [1,5,2,8,0,7]
var arr2= [1,5,2,8,0,7]
var arr3= [1,5,2,8,0,7]
var moRen =arr1.sort();
var moRen1 = arr2.sort(function(r1,r2){
    return r1 - r2;
});
var fanXu = arr3.sort(function(a,b){
    return b-a;
})
console.log(moRen)
console.log(moRen1)
console.log(fanXu)