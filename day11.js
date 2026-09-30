//Приветствие
let nameInput=document.getElementById("nameInput");
let nameOutput=document.getElementById("nameOutput");
let greeting=document.getElementById("greeting");

nameInput.addEventListener("input",()=>{
    if (nameInput.value === ""){ 
        nameOutput.textContent = "—";
        greeting.textContent = "Привет, незнакомец!";
    } else {
        nameOutput.textContent= nameInput.value;
        greeting.textContent = `Привет, ${nameInput.value}!`;
    }
});

//Список покупок
let myForm=document.getElementById("myForm");
let itemInput=document.getElementById("itemInput");
let shoppingList=document.getElementById("shoppingList");

myForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    if(itemInput.value === ""){
        alert("Введите товар!")
    }
    else {
        let li=document.createElement("li");
        li.textContent=itemInput.value;
        shoppingList.appendChild(li)
        itemInput.value = "";
    }
})

//Клавиатура
let keyOutput=document.getElementById("keyOutput");
document.addEventListener("keydown", (event)=>{
    keyOutput.textContent=event.key;
})

