function f(x,y){
    var arr={};
    var max = x>y? x:y;
    var min = x>y? y:x;
    var avg = (x+y)/2;
    arr.max= max;
    arr.min= min;
    arr.avg= avg;
    return arr;
}
console.log(f(1,3).max)