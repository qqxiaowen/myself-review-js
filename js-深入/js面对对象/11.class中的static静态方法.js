class abc{
    constructor(a,b){
        this.name =a;
        this.age =b
    }
    say(){
        return console.log("你好")
    }
    static nicai(){
        return  console.log("我是静态方法")
    }
}
var x1 = new abc("wangcai","7");
console.log(x1)
x1.say();
// 调用静态方法，只能用方法名.静态方法
abc.nicai();