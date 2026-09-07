//задача 1
const manageUser=()=>{
    let user={
        name: "Анна",
        age: 25,
        city: "Москва"
    };
    console.log(user.name);
    user.age=26;
    user.profession="программист";
    delete user.city
    console.log(user)
}

manageUser();

//задача 2
const hasProperty=(obj, key)=>key in obj

console.log(hasProperty({a: 1, b: 2}, "a"));
console.log(hasProperty({a: 1, b: 2}, "c"));


//задача 3
const printObject=(obj)=>{
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
}

printObject({name: "Анна", age: 25})