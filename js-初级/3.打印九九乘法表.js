var str="";
for(i=1;i<=9;i++){
    for(j=1;j<=i;j++){
        // if(j==3&&i==8){
        //     continue
        // }

        // str+=j+"*"+i+"="+j*i+" "
        str+= `${j}*${i}=${j*i} `
    }
    str+="\n"
}
console.log(str);
