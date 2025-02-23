const menuIcon = document.querySelector('.menu-icon');
const backDrop = document.querySelector('.backdrop');
const navLinks = document.querySelector('.nav-link');
const closeIcon = document.querySelector('.close-icon');


menuIcon.addEventListener("click" , () => {
    navLinks.classList.add("active");
    backDrop.classList.add("active");
});

closeIcon.addEventListener("click" , () => {
    navLinks.classList.remove("active");
    backDrop.classList.remove("active");
});

backDrop.addEventListener("click" , () => {
    navLinks.classList.remove("active");
    backDrop.classList.remove("active");
});