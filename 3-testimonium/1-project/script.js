//     slides[0].style.marginLeft = "-0%";

const buttons = document.querySelectorAll(".dot");
const slideParent = document.querySelector(".tetimoniums");


buttons[0].addEventListener("click", ()=>{
    slideParent.style.marginLeft = "0px";
    buttons[0].style.width = "35px";
    buttons[1].style.width = "15px";
    buttons[2].style.width = "15px";
    buttons[0].style.transition = ".3s"
})

buttons[1].addEventListener("click", ()=>{
    slideParent.style.marginLeft = "-100%";
    buttons[0].style.width = "15px";
    buttons[1].style.width = "35px";
    buttons[2].style.width = "15px";
    buttons[1].style.transition = ".3s"
})

buttons[2].addEventListener("click", ()=>{
    slideParent.style.marginLeft = "-200%";
    buttons[0].style.width = "15px";
    buttons[1].style.width = "15px";
    buttons[2].style.width = "35px";
    buttons[2].style.transition = ".3s"
})

