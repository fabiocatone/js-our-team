const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

const cardEl = document.getElementById("cardSection")



for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i]  
    const{ name, role, email, img } = member 

    const markup = `
     <div class="card col-4 bg-black" style="width: 12rem;">
        <img src = "${img}" alt = "..." >
            <div class="card-body">
                <h2 class= "text-light" id="nameMember"> ${name} </h2>
                <p id="role" class="text-light"> ${role} </p>
                <p id="email" class="card-text text-info"> ${email}</p>
            </div> </div> `
    
            cardEl.innerHTML += markup
}

const newName = document.getElementById("newName")
const newRole = document.getElementById("newRole")
const newMail = document.getElementById("newMail")
const buttonEl = document.getElementById("btn")
const formEl = document.querySelector("form")

formEl.addEventListener("submit", function(event) {
    event.preventDefault()
    const newmarkup = `
<div class="card col-4 my-2 bg-black" style="width: 12rem;">
        <img src = "img/foto.jpeg" alt = "..." >
            <div class="card-body">
                <h2 class= "text-light" id="nameMember"> ${newName.value} </h2>
                <p id="role" class="text-light"> ${newRole.value} </p>
                <p id="email" class="card-text text-info"> ${newMail.value}</p>
            </div> </div> `   
            
            cardEl.innerHTML += newmarkup


})



            



