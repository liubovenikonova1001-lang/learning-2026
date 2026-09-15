//Задача 1
const createStepCounter = (step)=>{
    let count =0;

    const internalFunction=( )=>{
        count=count + step;
        return count;
    };
    return internalFunction;
};

console.log(`Вывод задачи 1:`);
let counterByTwo = createStepCounter(2);
console.log(counterByTwo());
console.log(counterByTwo());
console.log(counterByTwo());

let counterByTen = createStepCounter(10);
console.log(counterByTen());
console.log(counterByTen());


//задача 2
const createMultiplier=(factor)=>{
  const interFunction=(number)=>number*factor;
  return interFunction;
};

let double = createMultiplier(2);
let triple = createMultiplier(3);
console.log();
console.log(`Вывод задачи 2:`);
console.log(double(5));
console.log(triple(5));
console.log(double(100))

//задача 3
const createAccount=(initialBalance)=>{
    let balance=initialBalance;
return {
        deposit:(amount)=>{ if (amount>0){balance+=amount}},
        withdraw:(amount)=> { if (amount<=balance){ balance-=amount}else {console.log(`Недостаточно средств`)}},
        getBalance: () =>{ return balance}
    };
}
console.log(`Вывод задачи 3`);
let myAccount = createAccount(1000);
console.log(myAccount.getBalance()); 
myAccount.deposit(500);
console.log(myAccount.getBalance()); 
myAccount.withdraw(2000);
myAccount.withdraw(300);
console.log(myAccount.getBalance());