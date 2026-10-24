let input=document.getElementById("input");
let form=document.getElementById("noteForm");
let todoList=document.getElementById("todoList");
let buttonDelAll=document.getElementById("buttonDelAll");
let haveDeputy=document.getElementById("haveDeputy");
let todos=JSON.parse(localStorage.getItem("todos")) || [];

const renderNotes=()=>{
    todoList.innerHTML="";

    if(todos.length===0){
        haveDeputy.style.display="block";
        return
    };
    haveDeputy.style.display="none"

    //todos={текст:..., дата:...}

    todos.forEach((matter, index)=>{

        let div=document.createElement("div");
        div.classList.add("card");

        let p=document.createElement("p");
        p.classList.add("cardP");
        p.textContent=matter.text

        let pDate=document.createElement("p")
        pDate.textContent=new Date(matter.date).toLocaleString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
        pDate.classList.add("pDate")

        let buttonDel=document.createElement("button");
        buttonDel.classList.add("cardButton");
        buttonDel.textContent="✘";

        buttonDel.addEventListener("click", ()=>{
            todos.splice(index,1)
            localStorage.setItem("todos", JSON.stringify(todos));
            renderNotes()
        })

        div.appendChild(p);
        div.appendChild(buttonDel);
        div.appendChild(pDate);
        todoList.appendChild(div);
    })
}

form.addEventListener(`submit`, (event)=>{
    event.preventDefault()
    if(input.value.trim()==="") return;
    
    let note = {
    text: input.value,
    date: new Date().toISOString()
};
todos.push(note);
    localStorage.setItem("todos",JSON.stringify(todos))
    input.value="";
    renderNotes()
    
})

    renderNotes()



buttonDelAll.addEventListener("click", ()=>{
            todos=[]
            localStorage.setItem("todos", JSON.stringify(todos));
            renderNotes() })

