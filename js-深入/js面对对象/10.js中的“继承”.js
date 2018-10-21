var arr =[1,2,3,4]
var str = arr.toString();
console.log(str)
//js中，没有真正的继承，是通过原型链模拟出来的
//arr本身并没有toString方法， 但是它的原型或原型的原型……一定有这个方法，arr就“继承”了这个方法，并使用它。
