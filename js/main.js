const toggle = document.querySelector("#toggle");
const navMenu = document.querySelector('nav ul');

toggle.onclick = () => {
    navMenu.classList.toggle('active');
    toggle.querySelector('i').classList.toggle('fa-bars');
    toggle.querySelector('i').classList.toggle('fa-xmark');
}

// carousel image

const imgs = document.querySelectorAll('#home .carousel-img')
let i = 0;

function nextCarousel() {
    i = (i+1) % imgs.length
    imgs.forEach((img,index) => img.classList.toggle('active', index ===i));
}

function prevCarousel(){
    i = (i - 1 +imgs.length)%imgs.length
    imgs.forEach((img,index) => img.classList.toggle('active',index === i))
}

setInterval(() => nextCarousel(),3000)

const form = document.querySelector("#form")
form.addEventListener("submit",function (e){
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries())
    let isValid = true;
    const validations = {
        name:data.name.trim() !== "",
        email:data.email.trim() !== "",
        subject:data.subject.trim() !== "",
        message:data.message.trim() !== ""
    };
    for(field in validations){
        if(!validations[field]){
            document.getElementById(field).style.borderColor = "red";
            isValid = false;
        } else {
            document.getElementById(field).style.borderColor = "#202020";
        }
    }
    if (isValid){
        alert("SUCCESS! Message successfully sent");
        this.reset();
    }
})

