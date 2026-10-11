
let form= document.getElementById("form");
let textInput=document.getElementById("textInput");
let availability=document.getElementById("availability");
let todoList=document.getElementById("todoList");
let clearBtn = document.getElementById("clearBtn");

let todos=JSON.parse(localStorage.getItem("todos")) || [];

const renderTodos=()=>{
    todoList.innerHTML=""; //очистили блок где находились дела

    if (todos.length === 0){
        availability.style.display="block";
        return
    }

    availability.style.display="none"

    todos.forEach((matter, index)=>{ //для каждого дела создаем свою карточку
        
    let divCard =document.createElement("div"); //карточка
    let span = document.createElement("span"); //текст карточки
    let buttonDelete = document.createElement("button"); //кнопка удаления

    span.textContent=matter;

    buttonDelete.textContent='✗';
    buttonDelete.addEventListener("click", ()=>{
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();

    })
    divCard.classList.add("card");
    buttonDelete.classList.add("delete-btn");
    
    divCard.appendChild(span);
    divCard.appendChild(buttonDelete);
    todoList.appendChild(divCard);
    })
} 

form.addEventListener(`submit`, (event)=>{
    event.preventDefault();

    if (textInput.value.trim() === "") return;

    todos.push(textInput.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    textInput.value ="";
    renderTodos();

})

clearBtn.addEventListener("click", () => {
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
});

    renderTodos()