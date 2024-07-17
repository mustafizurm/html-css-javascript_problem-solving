

const nav = document.querySelector("header");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        nav.classList.add("scrolled")
    } else{
        nav.classList.remove("scrolled")
    }
})




const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")
const menu = document.querySelector(".menu-list")


openBtn.style.display = "block";

openBtn.addEventListener("click", ()=>{
    menu.classList.add("active")
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
})

closeBtn.addEventListener("click", ()=>{
    menu.classList.remove("active")
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
})