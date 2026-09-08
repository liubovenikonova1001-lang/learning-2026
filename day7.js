//задание 1
const myForEach=(arr, callback)=>{
    for (let i=0; i<arr.length;i++){
        callback(arr[i], i)
    }
};

myForEach([10,20,30], (num, i)=>console.log(num*i));


//задание 2
const myFilter=(arr, callback)=>{
    let result=[];
    for (let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

console.log(myFilter([1,2,3,4,5], num=>num%2 === 0));


//задание 3
const myMap = (arr,callback)=>{
    let result = [];
    for (let i=0; i<arr.length; i++){
       result.push(callback(arr[i]));
    };
    return result
}
console.log(myMap([1,2,3], num => num*2))