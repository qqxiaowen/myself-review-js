var obj ={
    a:"aaa",
    b:"bbb"
}

// hasOwnProperty 只能在自己本身的属性里找

console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("b"));
console.log("---------------");
console.log(obj.hasOwnProperty("__proto__"))
console.log("---------------");
//打印出的是原型属性，__proto__是隐式原型
// console.log(obj.__proto__.hasOwnProperty("toString"))