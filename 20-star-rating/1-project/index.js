const icons = document.querySelectorAll(".fa-star");

icons.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        icon.classList.toggle("active");
    })
})