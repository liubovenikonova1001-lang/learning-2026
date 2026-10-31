let searchInput = document.getElementById("searchInput");
let loadBtn=document.getElementById("loadBtn");
let loader=document.getElementById("loader");
let errorMessage=document.getElementById("errorMessage");
let emptyMessage=document.getElementById("emptyMessage")
let userGrid=document.getElementById("userGrid");

let allUsers = []; //загруженные пользователи
let currentUsers= [] //отфильтрованный список

loader.style.display="none"
emptyMessage.style.display="none"

async function fetchUsers() {
    errorMessage.textContent = "";
    loadBtn.disabled = true;
    try{loader.style.display="block";
        let response= await fetch("https://jsonplaceholder.typicode.com/users");
        let data=await response.json()
        allUsers=data
        currentUsers=data
        renderUsers(currentUsers)
    } catch (error){
        errorMessage.textContent=error.message;
    } finally {
        loader.style.display="none"
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    fetchUsers();})
searchInput.addEventListener('input', ()=>{
let query = searchInput.value.toLowerCase().trim();
    if (query === ""){
        currentUsers=allUsers;
    } else {
        currentUsers = allUsers.filter(user => 
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
    }
    renderUsers(currentUsers)
});

const renderUsers= (users)=> {
    userGrid.innerHTML="";
    if(users.length === 0){
        emptyMessage.style.display="block";

    }
    else if(users.length > 0){
        emptyMessage.style.display="none";

        users.forEach(user => {
        let card=document.createElement("div");
        card.classList.add("card")
        
        let pAvatar=document.createElement("p");
        pAvatar.textContent=user.name.charAt(0).toUpperCase();
        pAvatar.classList.add('pAvatar');
        card.appendChild(pAvatar);

        let pName=document.createElement("p");
        pName.textContent=user.name;
        pName.classList.add("pName");
        card.appendChild(pName);

        let pEmail=document.createElement("p");
        pEmail.textContent=user.email;
        pEmail.classList.add("pEmail");
        card.appendChild(pEmail);
    
        let pCity=document.createElement("p");
        pCity.textContent=user.address.city;
        pCity.classList.add("pCity");
        card.appendChild(pCity);

        userGrid.appendChild(card);
        });
    }
}
fetchUsers()