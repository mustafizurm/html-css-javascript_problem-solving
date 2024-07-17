const button = document.querySelectorAll(".icon span");
const items = document.querySelectorAll(".item");
const answer = document.querySelectorAll(".answer");

ToggleEvent

button.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const item = e.target.parentElement.parentElement;
        item.classList.toggle("active")
        console.log(item);
    })
})