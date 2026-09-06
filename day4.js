//задача 1
const manageShoppingList=()=>{
    let shoppingList=[];
    shoppingList.push("молоко");
    shoppingList.push("хлеб");
    shoppingList.push("яйца");
    shoppingList.unshift("масло");
    shoppingList.pop();
    shoppingList.push("сыр")    
    console.log(shoppingList)
    console.log(`Длина списка: ${shoppingList.length}`)
};

manageShoppingList()


// задача 2
const findElement=(arr, value)=>{
    if(arr.includes(value)===false){
        return "Элемент не найден"
    }
    else {return `Элеммент найден на позиции ${arr.indexOf(value)}`}
}

let arr1=[10,20,30,40]
console.log(findElement(arr1, 30))
console.log(findElement(arr1,99))


//задача 3
const getEvenNumbers=(arr)=>{
    arr=arr.filter(num=>num%2===0)
    return arr
}

console.log(getEvenNumbers([10,15,20,25]))