const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const menu_list = document.querySelector(".menu-list");

openBtn.addEventListener("click", ()=>{
    menu_list.classList.add("active")
})

closeBtn.addEventListener("click", ()=>{
    menu_list.classList.remove("active")
})