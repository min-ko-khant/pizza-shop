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