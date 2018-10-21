// // 最大值
// console.log(Number.MAX_VALUE)
// // 最小值
// console.log(Number.MIN_VALUE)
// //0开头 默认是八进制
// var a = 012;
// console.log(a);
// //0x开头 默认是十六进制
// var b= 0x11;
// console.log(b);


// //字符串类型
//  var a= "hello";
//  var b="world";
//  var html= "<h1></h1>";
//  console.log(a,b,html)
//  console.log(typeof a)

// //undefined and null
// var a;
// var b= null;
// console.log(typeof a,a);
// console.log(typeof b,b);

// // 内置对象(object)中的 Data
// var time = Date();
// console.log(time);
// console.log(typeof time);

// //强制转换
// console.log(123);
// console.log(typeof 123);
// console.log(String(123));
// console.log(typeof String(123));

// //尝试把所有的内容转为整数
// console.log(parseInt(3.333));
// console.log(parseInt("abc"));
// console.log(parseInt("a123"));
// console.log(parseInt("123a456"));

// // 尝试把所有的内容转为浮点数
// console.log(parseFloat("abc11"))
// console.log(parseFloat("4.4321bb123"))

// //隐式转换
// var a = 1+"abc"
// var b="abc"+1;
// console.log(a,b);
// console.log(typeof a,typeof b)
// console.log("\n")
// console.log("\n")
// var c="abcd"
// console.log(1+c);
// console.log(c+1);

// var a=10;
// var b=a++; //a++本身是一个数值，他是a的旧值
// console.log(a);
// console.log(b);

// var a=10;
// var b=++a; //++a本身是一个数值，他是a的新值
// console.log(a);
// console.log(b);

// //关系运算符
// // ==判断两个变量的大小，不包括数值类型，===判断两个变量，包括数值类型
// console.log("1"==1);
// console.log("1"===1);
// typeof 是一个关系运算符,他不是一个函数，因为他可以不加()
// console.log(typeof ("name"))
// console.log(typeof "name")
//传统字符串链接
// var name = "doudou";
// var age= 5;
// console.log(name+"今年已经"+age+"岁啦")
// var a = "hello";
// var b = "worle";;
// var c = "<ul>"+
//             "<li>"+a+"</li>"+
//             "<li>"+b+"</li>"+
//         "<ul>"
// console.log("c:"+c);
// //模板字符串链接
// console.log(`${name}今年已经${age}岁啦`)
// var c2=`<ul>
//             <li>${a}<li>
//             <li>${b}</li>
//         </ul>`
// console.log("c2:"+c2)