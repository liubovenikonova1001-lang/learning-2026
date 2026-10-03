let statusI=document.getElementById("status");
let errorOutput=document.getElementById("errorOutput");
let userContainer=document.getElementById("userContainer");
let postContainer=document.getElementById("postsContainer");
let commentsContainer=document.getElementById("commentsContainer");
let loadBtn=document.getElementById("loadBtn");

const showUser=(user)=>{
    userContainer.innerHTML="";

    let h2=document.createElement("h2");
    h2.textContent=user.name;
    userContainer.appendChild(h2)

    let pEmail=document.createElement("p");
    pEmail.textContent=user.email;
    userContainer.appendChild(pEmail);

    let pCity=document.createElement("p");
    pCity.textContent=user.address.city;
    userContainer.appendChild(pCity);

};

const showPosts=(posts)=>{
    postContainer.innerHTML="";

    for (let post of posts){
        let divPosts=document.createElement("div");
        divPosts.classList.add("card");

        let h3=document.createElement("h3");        
        let title = post.title;
        title = title.charAt(0).toUpperCase() + title.slice(1);
        h3.textContent = title;
        divPosts.appendChild(h3);

        let pBody=document.createElement("p")
        let textBody=post.body;
        textBody = `${textBody.charAt(0).toUpperCase()}${textBody.slice(1)}.`;
        pBody.textContent=textBody;
        divPosts.appendChild(pBody);

        postContainer.appendChild(divPosts);
    };
};

const showComments=(comments)=>{
    commentsContainer.innerHTML="";

    for(let comment of comments){
        let divCom=document.createElement("div");
        divCom.classList.add("card");
    
        let pEm=document.createElement("p");
        pEm.textContent=comment.email;
        divCom.appendChild(pEm);

        let pB=document.createElement("p");
        let textCom=comment.body;
        textCom=`${textCom.charAt(0).toUpperCase()}${textCom.slice(1)}.`;
        pB.textContent=textCom;
        divCom.appendChild(pB);

        commentsContainer.appendChild(divCom);
    }
}

async function loadAll(){
    try{
        statusI.textContent="Загрузка...";
        let[user, posts, comments]=await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then(r=>r.json()),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(r=>r.json()),
            fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then(r=>r.json())
        ]);
        statusI.textContent="Загружено!"
        showUser(user);
        showPosts(posts);
        showComments(comments);
    }
    catch(error){
        errorOutput.textContent=`Ошибка: — ${error.message}`
        statusI.textContent="Ошибка"
    }
}

loadBtn.addEventListener("click", ()=>{
    userContainer.innerHTML="";
    postContainer.innerHTML="";
    commentsContainer.innerHTML="";

    errorOutput.textContent="—";

    loadAll();

})