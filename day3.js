const countFromTo=(start,end)=>{
    if(start>end){console.log("Ошибка: начало больше конца")
    } else {
    for(let number =start;number<=end;number++){
        console.log(number)
    }}
};

countFromTo(3,6);


const sumToN=(n)=>{
    let number=1;
    let sum=0;
    while(number<=n){
        sum+=number;
        number++
    }
    return sum
};

console.log(sumToN(4));


const multiplicationTable=(n)=>{
    for(let i=1;i<11;i++){
        console.log(`${n} x ${i} = ${n*i}`)
    }
}

multiplicationTable(3)