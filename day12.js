let loadBtn=document.getElementById("loadBtn");
let container=document.getElementById("container");
let errorOutput=document.getElementById("errorOutput");

async function loadUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        for(let userObj of users){ 
        let div = document.createElement("div");

        let h3=document.createElement("h3")
        h3.textContent=userObj.name;

        let pEmail=document.createElement("p")
        pEmail.textContent=userObj.email;

        let pPhone=document.createElement("p")
        pPhone.textContent=userObj.phone;

        let pCity=document.createElement("p")
        pCity.textContent=userObj.address.city;

        div.appendChild(h3)
        div.appendChild(pEmail)
        div.appendChild(pPhone)
        div.appendChild(pCity)
        container.appendChild(div);
        }
    }
    catch(error){
        errorOutput.textContent=error.message;
    }
}

loadBtn.addEventListener("click", ()=>{
    container.innerHTML="";
    errorOutput.textContent = "—";
    loadUsers();

})
