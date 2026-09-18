//задача 1
let title1=document.getElementById("title")
console.log(title1)
title1.textContent="DOM - это просто"

//задача 2
let index=0;
let colors = ["red", "blue","green"];
document.getElementById("colorBtn").addEventListener("click", ()=>{
    let currentColor=colors[index % colors.length]; 
    title1.style.color = currentColor;
    index++})

//задача 3
let contain=document.getElementById("container");
for(let i=0; i<=4; i++){
    let newP=document.createElement("p");
    newP.textContent = `Это параграф №${i+1}`
    contain.appendChild(newP)
    if ((i+1)%2===0){
        newP.style.color="gray"
    }
}

//задача 4
document.getElementById("changeBtn").addEventListener("click", ()=>{
    title1.textContent="Кнопка сработала!"
})