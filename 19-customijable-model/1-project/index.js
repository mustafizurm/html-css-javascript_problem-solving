const openBtn = document.querySelector("#openBtn");
const model = document.querySelector(".model-item");
const closeBtn = document.querySelector("#closeBtn");

openBtn.addEventListener("click", ()=>{
    openBtn.classList.add("remove");
    model.classList.add("active");
})

closeBtn.addEventListener("click", ()=>{
    model.classList.remove("active");
    openBtn.classList.remove("remove")
})
